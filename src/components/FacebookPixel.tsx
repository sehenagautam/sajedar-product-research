'use client';

import { useEffect } from 'react';

// Extend Window interface to include fbq
declare global {
  interface Window {
    fbq: (command: string, event: string, parameters?: any) => void;
  }
}

interface FacebookPixelProps {
  pixelId: string;
}

export function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);

  return null;
}

// Utility functions for tracking events
export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Common event tracking functions
export const trackLead = (value?: number, currency?: string) => {
  trackFacebookEvent('Lead', {
    value: value,
    currency: currency || 'USD',
    content_name: 'Contact Form Submission',
    content_category: 'Lead Generation'
  });
};

export const trackContact = () => {
  trackFacebookEvent('Contact');
};

export const trackViewContent = (contentName: string, contentType: string) => {
  trackFacebookEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType
  });
};

export const trackCompleteRegistration = () => {
  trackFacebookEvent('CompleteRegistration', {
    content_name: 'Newsletter Signup',
    content_category: 'Email Subscription'
  });
};

export const trackInitiateCheckout = (value?: number, currency?: string) => {
  trackFacebookEvent('InitiateCheckout', {
    value: value,
    currency: currency || 'USD',
    content_name: 'Service Inquiry',
    content_category: 'Business Services'
  });
};

export const trackPurchase = (value: number, currency?: string) => {
  trackFacebookEvent('Purchase', {
    value: value,
    currency: currency || 'USD',
    content_name: 'AI Chatbot Service',
    content_category: 'Business Services'
  });
};
