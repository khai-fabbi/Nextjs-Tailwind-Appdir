'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { NotificationIcon, SearchIcon } from '@/components/icons'
import UnstyledLink from '@/components/links/UnstyledLink'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Logo from '~/svg/Logo.svg'

export default function TopBar() {
  const { setTheme } = useTheme()

  return (
    <header className='bg-grayfc px-5 py-4'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-1 items-center gap-32'>
          <UnstyledLink href='/' className='flex items-center gap-3'>
            <Logo className='w-10' />
            <h3>Yariga</h3>
          </UnstyledLink>
          <div className='bg-grayf4 flex flex-[0_1_408px] items-center gap-2 rounded-lg px-4 py-2.5'>
            <SearchIcon className='shrink-0' />
            <input
              placeholder='Search Property, Customer etc'
              className='form-input text-primaryText w-full border-none bg-transparent p-1 text-sm shadow-transparent outline-none focus:ring-0'
            />
          </div>
        </div>

        <div className='flex shrink-0 items-center gap-x-5'>
          <NotificationIcon className='cursor-pointer' />
          <div className='flex cursor-pointer items-center gap-x-4 transition-all hover:opacity-80'>
            <Image
              priority
              width={40}
              height={40}
              className='rounded-full object-cover'
              src='/images/qk.jpg'
              alt='add'
            />
            <div className='flex flex-col gap-y-0.5'>
              <span className='text-sm font-semibold'>Quang Khai</span>
              <span className='text-gray80 text-sm'>Developer</span>
            </div>
          </div>

          {/* theme */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
