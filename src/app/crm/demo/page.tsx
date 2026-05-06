import type { Metadata } from 'next';
import CrmDemo from '../crm-demo-1';

export const metadata: Metadata = {
  title: 'CRM Demo — Sajedar',
  description: 'Interactive demo of the Sajedar Custom CRM dashboard.',
  robots: { index: false, follow: false },
};

export default function CrmDemoPage() {
  return <CrmDemo />;
}
