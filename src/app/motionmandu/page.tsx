import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Motionmandu AI — Redirecting to Creatives',
};

export default function MotionmanduPage() {
  redirect('/creatives');
}
