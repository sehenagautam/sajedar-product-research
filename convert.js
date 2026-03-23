const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function convertImages() {
    const files = fs.readdirSync(publicDir);
    const pngs = files.filter(f => f.toLowerCase().endsWith('.png'));

    for (const file of pngs) {
        const inputPath = path.join(publicDir, file);
        const outputPath = path.join(publicDir, file.replace(/\.png$/i, '.webp'));

        // Some logic for resizing based on filename or just generally making sure they're not massive
        try {
            let transformer = sharp(inputPath);

            const metadata = await transformer.metadata();

            // Resize huge images down to max width 1200, if logo maybe max width 800
            let targetWidth = null;
            if (metadata.width > 1200) {
                targetWidth = 1200;
            }
            if (file.toLowerCase().includes('logo') && metadata.width > 600) {
                targetWidth = 600;
            }

            if (targetWidth) {
                transformer = transformer.resize({ width: targetWidth, withoutEnlargement: true });
            }

            await transformer
                .webp({ quality: 80 }) // compress
                .toFile(outputPath);

            console.log(`Converted ${file} to ${path.basename(outputPath)}`);
        } catch (e) {
            console.error(`Error processing ${file}: ${e.message}`);
        }
    }
}

convertImages();
