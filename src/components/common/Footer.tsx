import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import UnderlineLink from '@/components/links/UnderlineLink';

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={twMerge('text-gray-700', className)}>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='/'>Quang Khai Fabbi</UnderlineLink>
    </footer>
  );
}
