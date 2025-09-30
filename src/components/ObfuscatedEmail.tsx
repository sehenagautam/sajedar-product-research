'use client';
import React from 'react';

type Props = {
  user: string;
  domain: string;
  className?: string;
  linkClassName?: string;
};

export default function ObfuscatedEmail({ user, domain, className, linkClassName }: Props) {
  const [reveal, setReveal] = React.useState(false);
  const email = `${user}@${domain}`;
  const href = `mailto:${email}`;

  return (
    <span className={className}>
      {reveal ? (
        <a href={href} className={linkClassName} rel="nofollow">{email}</a>
      ) : (
        <button
          type="button"
          onClick={() => setReveal(true)}
          className={linkClassName}
          aria-label="Reveal email"
        >
          Click to reveal
        </button>
      )}
    </span>
  );
}
