'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent, type AnalyticsParams } from '../../lib/analytics';

interface TrackedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  eventName?: string;
  params?: AnalyticsParams;
}

export function TrackedLink({ href, className, children, eventName = 'cta_click', params }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent(eventName, { link_url: href, ...params });
      }}
    >
      {children}
    </Link>
  );
}
