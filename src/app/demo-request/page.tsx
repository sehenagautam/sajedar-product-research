'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';

declare global {
  interface Window {
    supabase?: {
      createClient: (url: string, key: string) => {
        storage: {
          from: (bucket: string) => {
            upload: (
              path: string,
              fileBody: Blob,
              options?: { contentType?: string; upsert?: boolean }
            ) => Promise<{ data: { path: string } | null; error: { message: string } | null }>;
            getPublicUrl: (path: string) => { data: { publicUrl: string } };
          };
        };
        from: (table: string) => {
          insert: (values: Record<string, unknown>[]) => Promise<{ error: { message: string } | null }>;
        };
      };
    };
  }
}

const SUPABASE_URL = 'https://ibgfepyfkdfopcngeoyb.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_L2kzlmU774TDNxEIJo_9yg_F8cbRsFe';

const PROFANITY_TERMS = [
  'arse',
  'asshole',
  'bastard',
  'bitch',
  'bollocks',
  'bullshit',
  'chutiya',
  'cunt',
  'dick',
  'fuck',
  'fucker',
  'fucking',
  'gandu',
  'harami',
  'kukur',
  'loda',
  'madarchod',
  'motherfucker',
  'nigga',
  'nigger',
  'porn',
  'pussy',
  'randi',
  'shit',
  'slut',
  'whore',
];

const PROFANITY_PATTERNS = PROFANITY_TERMS.map((term) => ({
  term,
  compact: term.replace(/[^a-z0-9]/g, ''),
  spaced: new RegExp(`\\b${term.split('').map((char) => `${char}+`).join('[\\W_]*')}\\b`, 'i'),
}));

type TextFieldName = 'businessName' | 'businessDetails' | 'productName' | 'price' | 'features' | 'contact';
type ProfanityErrors = Partial<Record<TextFieldName, string>>;

const FIELD_LABELS: Record<TextFieldName, string> = {
  businessName: 'Business Name',
  businessDetails: 'Business Details',
  productName: 'Product Name',
  price: 'Price',
  features: 'Product Features',
  contact: 'Contact',
};

function normalizeForProfanity(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[0@]/g, 'o')
    .replace(/[1!|]/g, 'i')
    .replace(/[3]/g, 'e')
    .replace(/[4]/g, 'a')
    .replace(/[5$]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/(.)\1{2,}/g, '$1$1');
}

function containsProfanity(value: string): boolean {
  const normalized = normalizeForProfanity(value);
  const compact = normalized.replace(/[^a-z0-9]/g, '');

  return PROFANITY_PATTERNS.some(({ compact: term, spaced }) => (
    compact.includes(term) || spaced.test(normalized)
  ));
}

function validateProfanity(fields: Record<TextFieldName, string>): ProfanityErrors {
  return (Object.keys(fields) as TextFieldName[]).reduce<ProfanityErrors>((errors, fieldName) => {
    if (containsProfanity(fields[fieldName])) {
      errors[fieldName] = `${FIELD_LABELS[fieldName]} contains language we cannot accept. Please revise it.`;
    }
    return errors;
  }, {});
}

export default function DemoRequestPage() {
  const [supabaseClient, setSupabaseClient] = useState<ReturnType<NonNullable<typeof window.supabase>['createClient']> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [profanityErrors, setProfanityErrors] = useState<ProfanityErrors>({});
  const [businessName, setBusinessName] = useState('');
  const [businessDetails, setBusinessDetails] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [features, setFeatures] = useState('');
  const [contact, setContact] = useState('');
  const [img1, setImg1] = useState<File | null>(null);
  const [img2, setImg2] = useState<File | null>(null);
  const [qr, setQr] = useState<File | null>(null);

  const clearFieldFeedback = (fieldName: TextFieldName) => {
    setIsSubmitted(false);
    setSuccessMessage('');
    setErrorMessage('');
    setProfanityErrors((currentErrors) => {
      if (!currentErrors[fieldName]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  };

  const optimizeImage = async (file: File | null, label: string): Promise<Blob | null> => {
    if (!file) return null;
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      const objectUrl = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX = 1200;
        let w = img.width;
        let h = img.height;

        if (w > h && w > MAX) {
          h = Math.round((h * MAX) / w);
          w = MAX;
        } else if (h >= w && h > MAX) {
          w = Math.round((w * MAX) / h);
          h = MAX;
        }

        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          reject(new Error(`Could not process ${label}.`));
          return;
        }

        ctx.drawImage(img, 0, 0, w, h);
        canvas.toBlob((blob) => {
          URL.revokeObjectURL(objectUrl);
          if (!blob) {
            reject(new Error(`Could not compress ${label}. Please try a JPG or PNG image.`));
            return;
          }
          resolve(blob);
        }, 'image/webp', 0.7);
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error(`Could not read ${label}. Please upload JPG, PNG, or WebP.`));
      };
      img.src = objectUrl;
    });
  };

  const uploadOptimizedImage = async (
    client: NonNullable<typeof supabaseClient>,
    blob: Blob | null,
    label: string
  ): Promise<string | null> => {
    if (!blob) return null;

    const filePath = `demo-requests/${Date.now()}-${label}.webp`;
    const { data, error } = await client.storage.from('images').upload(filePath, blob, {
      contentType: 'image/webp',
      upsert: false,
    });

    if (error || !data) {
      throw new Error(error?.message || `Failed to upload ${label}`);
    }

    const { data: publicData } = client.storage.from('images').getPublicUrl(data.path);
    return publicData.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!supabaseClient) {
      alert('Supabase is not ready yet. Please try again.');
      return;
    }
    if (SUPABASE_URL.includes('your-project-url')) {
      alert('Supabase URL is still a placeholder. Replace SUPABASE_URL in src/app/demo-request/page.tsx with your real project URL.');
      return;
    }

    const textFields = {
      businessName,
      businessDetails,
      productName,
      price,
      features,
      contact,
    };
    const nextProfanityErrors = validateProfanity(textFields);
    if (Object.keys(nextProfanityErrors).length > 0) {
      setProfanityErrors(nextProfanityErrors);
      setIsSubmitted(false);
      setSuccessMessage('');
      setErrorMessage('Please remove inappropriate language from the highlighted fields before submitting.');
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const [optimizedImg1, optimizedImg2, optimizedQr] = await Promise.all([
        optimizeImage(img1, 'product image 1'),
        optimizeImage(img2, 'product image 2'),
        optimizeImage(qr, 'business QR image'),
      ]);

      const [productImage1Url, productImage2Url, businessQrImageUrl] = await Promise.all([
        uploadOptimizedImage(supabaseClient, optimizedImg1, 'product-image-1'),
        uploadOptimizedImage(supabaseClient, optimizedImg2, 'product-image-2'),
        uploadOptimizedImage(supabaseClient, optimizedQr, 'business-qr-image'),
      ]);

      const payload: Record<string, unknown> = {
        business_name: businessName,
        business_details: businessDetails,
        product_name: productName,
        product_features: features,
        price_usd: price,
        price: price,
        contact,
        contact_info: contact,
        phone_or_email: contact,
        product_image_1_url: productImage1Url,
        product_image_1: productImage1Url,
        product_image1_url: productImage1Url,
        product_image_2_url: productImage2Url,
        product_image_2: productImage2Url,
        product_image2_url: productImage2Url,
        business_qr_image_url: businessQrImageUrl,
        businesss_qr_image_url: businessQrImageUrl,
        businessss_qr_image_url: businessQrImageUrl,
      };

      let error: { message: string } | null = null;
      for (let i = 0; i < 20; i += 1) {
        const result = await supabaseClient.from('demos').insert([payload]);
        error = result.error;
        if (!error) break;

        const missingColumnMatch = error.message.match(/Could not find the '([^']+)' column/);
        if (!missingColumnMatch) {
          break;
        }

        const missingColumn = missingColumnMatch[1];
        if (missingColumn in payload) {
          delete payload[missingColumn];
          continue;
        }
        break;
      }

      if (error) {
        throw new Error(`DB insert failed: ${error.message}`);
      }

      setBusinessName('');
      setBusinessDetails('');
      setProductName('');
      setPrice('');
      setFeatures('');
      setContact('');
      setImg1(null);
      setImg2(null);
      setQr(null);
      form.reset();
      setIsSubmitted(true);
      setSuccessMessage('Request submitted successfully. Our team will review your details and contact you shortly.');

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('Demo request submit failed:', message, err);
      setErrorMessage('We could not submit your request just yet. Please review the form and try again.');
      alert(`Failed to submit demo request: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#44403c] flex flex-col">
      <Script
        src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.supabase) {
            const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
            setSupabaseClient(client);
          }
        }}
      />

      <Header />

      <main className="w-full max-w-4xl mx-auto px-4 py-24 flex-grow">
        <div className="mb-6">
          <Link href="/" className="text-sm font-medium text-[#57534e] hover:text-emerald-600 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#292524] mb-2">Request Demo</h1>
          <p className="text-[#57534e] mb-8">
            Share your product details and we will review your setup requirements for a Messenger-first AI sales workflow.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Business Name</label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                  clearFieldFeedback('businessName');
                }}
                aria-invalid={Boolean(profanityErrors.businessName)}
                aria-describedby={profanityErrors.businessName ? 'businessName-error' : undefined}
                className={`w-full border rounded-md px-3 py-2 bg-white ${profanityErrors.businessName ? 'border-red-400 focus:outline-red-500' : 'border-stone-300'}`}
              />
              {profanityErrors.businessName ? (
                <p id="businessName-error" className="mt-1 text-sm font-medium text-red-600">{profanityErrors.businessName}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Business Details</label>
              <textarea
                rows={4}
                required
                value={businessDetails}
                onChange={(e) => {
                  setBusinessDetails(e.target.value);
                  clearFieldFeedback('businessDetails');
                }}
                aria-invalid={Boolean(profanityErrors.businessDetails)}
                aria-describedby={profanityErrors.businessDetails ? 'businessDetails-error' : undefined}
                className={`w-full border rounded-md px-3 py-2 bg-white ${profanityErrors.businessDetails ? 'border-red-400 focus:outline-red-500' : 'border-stone-300'}`}
              />
              {profanityErrors.businessDetails ? (
                <p id="businessDetails-error" className="mt-1 text-sm font-medium text-red-600">{profanityErrors.businessDetails}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Product Name</label>
              <input
                type="text"
                required
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                  clearFieldFeedback('productName');
                }}
                aria-invalid={Boolean(profanityErrors.productName)}
                aria-describedby={profanityErrors.productName ? 'productName-error' : undefined}
                className={`w-full border rounded-md px-3 py-2 bg-white ${profanityErrors.productName ? 'border-red-400 focus:outline-red-500' : 'border-stone-300'}`}
              />
              {profanityErrors.productName ? (
                <p id="productName-error" className="mt-1 text-sm font-medium text-red-600">{profanityErrors.productName}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Price</label>
              <input
                type="text"
                required
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  clearFieldFeedback('price');
                }}
                aria-invalid={Boolean(profanityErrors.price)}
                aria-describedby={profanityErrors.price ? 'price-error' : undefined}
                className={`w-full border rounded-md px-3 py-2 bg-white ${profanityErrors.price ? 'border-red-400 focus:outline-red-500' : 'border-stone-300'}`}
              />
              {profanityErrors.price ? (
                <p id="price-error" className="mt-1 text-sm font-medium text-red-600">{profanityErrors.price}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Product Image 1</label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => setImg1(e.target.files?.[0] || null)}
                className="w-full border border-stone-300 rounded-md px-3 py-2 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Product Image 2</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg2(e.target.files?.[0] || null)}
                className="w-full border border-stone-300 rounded-md px-3 py-2 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Product Features</label>
              <textarea
                rows={5}
                required
                value={features}
                onChange={(e) => {
                  setFeatures(e.target.value);
                  clearFieldFeedback('features');
                }}
                aria-invalid={Boolean(profanityErrors.features)}
                aria-describedby={profanityErrors.features ? 'features-error' : undefined}
                className={`w-full border rounded-md px-3 py-2 bg-white ${profanityErrors.features ? 'border-red-400 focus:outline-red-500' : 'border-stone-300'}`}
              />
              {profanityErrors.features ? (
                <p id="features-error" className="mt-1 text-sm font-medium text-red-600">{profanityErrors.features}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Business QR Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setQr(e.target.files?.[0] || null)}
                className="w-full border border-stone-300 rounded-md px-3 py-2 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#292524]">Your Contact (phone / email)</label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  clearFieldFeedback('contact');
                }}
                aria-invalid={Boolean(profanityErrors.contact)}
                aria-describedby={profanityErrors.contact ? 'contact-error' : undefined}
                className={`w-full border rounded-md px-3 py-2 bg-white ${profanityErrors.contact ? 'border-red-400 focus:outline-red-500' : 'border-stone-300'}`}
              />
              {profanityErrors.contact ? (
                <p id="contact-error" className="mt-1 text-sm font-medium text-red-600">{profanityErrors.contact}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !supabaseClient}
              className="w-full md:w-auto px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors"
            >
              {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit Demo Request'}
            </button>
            {successMessage ? (
              <p className="text-sm font-medium text-emerald-700">{successMessage}</p>
            ) : null}
            {errorMessage ? (
              <p className="text-sm font-medium text-red-600">{errorMessage}</p>
            ) : null}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
