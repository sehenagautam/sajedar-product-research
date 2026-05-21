import Link from 'next/link';

export default function PolicyViewPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16 text-gray-800">
      <div className="max-w-xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Hosted policy links are retired</h1>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          Sajedar no longer hosts user-generated privacy policies from URL data. Please use a policy page on your own domain, or use Sajedar&apos;s generator to copy policy text into your website.
        </p>
        <Link
          href="/privacy-policy"
          className="mt-6 inline-flex rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          View Sajedar privacy policy
        </Link>
      </div>
    </main>
  );
}
