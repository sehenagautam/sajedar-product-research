import type { Metadata } from 'next';
import IQTestClient from './IQTestClient';

export const metadata: Metadata = {
  title: 'IQ Test',
  description: 'Take a quick 10-question IQ-style reasoning test and get an instant estimated score.',
  alternates: {
    canonical: 'https://sajedar.com/iq-test',
  },
};

export default function IQTestPage() {
  return <IQTestClient />;
}
