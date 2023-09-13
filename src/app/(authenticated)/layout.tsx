import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import { SideBar, TopBar } from '@/components/common';

export const metadata: Metadata = {
  title: 'Onboard Layout',
  description: 'Onboard Layout',
};

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <div className='relative grid min-h-[calc(100vh-80px)] grid-cols-[250px_minmax(0,1fr)]'>
        <SideBar />
        <main className='bg-grayf4 px-6 py-7'>{children}</main>
      </div>
    </>
  );
}
