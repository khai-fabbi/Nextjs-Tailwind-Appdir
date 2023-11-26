import { Metadata } from 'next';
import * as React from 'react';


export const metadata: Metadata = {
  title: 'Property',
  description: 'Property',
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
