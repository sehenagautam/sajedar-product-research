import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Social Media Graphics — Redirecting to Creatives',
};

export default function SocialMediaGraphicsPage() {
  redirect('/creatives');
}
