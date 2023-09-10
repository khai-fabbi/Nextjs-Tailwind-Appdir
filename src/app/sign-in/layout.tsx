import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='layout'>{children}</main>;
}
