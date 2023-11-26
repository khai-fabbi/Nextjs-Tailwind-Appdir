import { Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
}

export default function OnBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex h-screen items-center justify-center'>
      {children}
    </section>
  )
}
