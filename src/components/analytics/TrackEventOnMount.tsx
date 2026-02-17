'use client';

import { useEffect } from 'react';
import { trackEvent, type AnalyticsParams } from '../../lib/analytics';

interface TrackEventOnMountProps {
  eventName: string;
  params?: AnalyticsParams;
}

export function TrackEventOnMount({ eventName, params }: TrackEventOnMountProps) {
  useEffect(() => {
    trackEvent(eventName, params);
  }, [eventName, params]);

  return null;
}
