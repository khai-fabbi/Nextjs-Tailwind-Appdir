import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Learning',
  description: 'Learning',
};

export default function LearnReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
