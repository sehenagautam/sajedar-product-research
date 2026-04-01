import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Messenger Ecommerce Automation',
  description: 'Messenger ecommerce automation services for conversion lift, abandoned cart recovery, and conversational checkout performance.',
  alternates: { canonical: '/messenger-ecommerce-automation' },
};

export default function MessengerEcommerceAutomationPage() {
  return (
    <>
      <AgencySeoPage
        currentPath="/messenger-ecommerce-automation"
        eyebrow="Use-Case Pillar"
        title="Messenger Ecommerce Automation"
        subtitle="Primary pillar page for ecommerce Messenger workflows that directly impact conversion, AOV, and repeat revenue."
        bullets={[
          'Build high-intent journeys from product discovery to checkout.',
          'Reduce abandonment with timed message recovery campaigns.',
          'Route qualified buyers to sales support only when needed.',
        ]}
        primaryCtaLabel="Talk to automation team"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Read supporting articles"
        secondaryCtaHref="/articles"
        clusters={[
          { title: 'Core Service Pages', links: coreServicePages },
          { title: 'Related Use-Case Pages', links: useCasePages },
          { title: 'Industry Pages', links: industryPages },
          { title: 'Proof and Conversion Pages', links: proofPages },
        ]}
      />

      {/* n8n Setup */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-emerald-400 mb-6">
            Setting up n8n locally on a Mac with Docker
          </h2>
          <div className="prose dark:prose-invert max-w-none text-gray-300">
            <p><strong>What we accomplished so far</strong></p>
            <p>You started by checking whether n8n was already running on your Mac, using the simplest test: opening http://localhost:5678 in your browser and checking whether the editor loads. This is the default local URL when n8n runs on its standard port in Docker.</p>
            <p>When it turned out n8n was not installed, you decided to self-host it locally with Docker, which n8n itself recommends for most self-hosting needs because it provides an isolated, consistent environment and simplifies dependency management.</p>
            <p>During setup, you hit a common macOS issue: Docker Desktop was installed and running, but the docker command was not available in Terminal. You verified Docker worked using the full binary path, then fixed the PATH/symlink situation so docker worked normally.</p>
            <p>After that, you followed the standard n8n Docker installation flow:</p>
            <ul>
              <li>Created a persistent Docker volume called n8n_data.</li>
              <li>Ran the official n8n Docker image and exposed port 5678.</li>
              <li>Set timezone variables so schedule-based workflows run on your local timezone.</li>
              <li>Let n8n pull the image, run initial database migrations, and start the editor.</li>
              <li>Opened the editor in your browser and completed the owner account setup wizard.</li>
            </ul>

            <p><strong>Run n8n locally with Docker</strong></p>
            <pre className="bg-black/30 p-4 rounded-2xl overflow-auto"><code>docker volume create n8n_data

docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -e GENERIC_TIMEZONE="Asia/Kathmandu" \
  -e TZ="Asia/Kathmandu" \
  -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
  -v n8n_data:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n</code></pre>

            <p><strong>How to confirm everything is working</strong></p>
            <ul>
              <li>Browser check → <strong>http://localhost:5678</strong></li>
              <li>Container check → <code>docker ps</code></li>
              <li>Persistence check → stop with Ctrl+C and run the command again</li>
            </ul>

            <p className="text-emerald-400 text-sm mt-8">✅ Your local n8n is now ready for building Messenger ecommerce automations.</p>
          </div>
        </div>
      </div>

      {/* STANDARD INTEGRATIONS - ONLY Meta */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-sm uppercase tracking-widest text-gray-400 mb-3">STANDARD INTEGRATIONS</div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-lg">
          <span className="text-emerald-400 font-medium">Meta (Priority)</span>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          * Only Meta Ads + Messenger ecosystem supported in this package.
        </p>
      </div>
    </>
  );
}