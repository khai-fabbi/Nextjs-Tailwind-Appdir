import { Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { RiAlarmWarningFill } from 'react-icons/ri'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <main>
      <section className='bg-background'>
        <div className='layout text-primary flex min-h-screen flex-col items-center justify-center text-center'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <Link href='/'>
            <Button className='mt-4' variant='outline'>
              Back to home
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
