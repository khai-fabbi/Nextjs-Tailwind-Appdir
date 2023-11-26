'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import { SIDE_BAR_LIST } from '@/constant/general.const'
export default function SideBar() {
  const currentRoute = usePathname()

  return (
    <section className='bg-grayfc px-4 py-6 dark:bg-transparent'>
      <ul>
        {SIDE_BAR_LIST.map(({ title, href, icon }) => {
          const isActive = currentRoute === href
          return (
            <li key={title}>
              <Link
                href={href}
                className={twMerge(
                  'text-gray80 flex items-center gap-x-2.5 rounded-xl px-6 py-4 font-bold transition-all hover:opacity-80',
                  isActive && 'bg-primary text-grayfc dark:text-black'
                )}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
