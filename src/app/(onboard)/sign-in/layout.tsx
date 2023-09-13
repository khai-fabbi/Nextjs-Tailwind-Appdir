import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
};

export default function OnBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='bg-grayf7 flex h-screen items-center justify-center'>
      {children}
    </section>
  );
}
