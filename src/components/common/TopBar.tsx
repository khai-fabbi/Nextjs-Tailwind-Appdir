import Image from 'next/image';

import { NotificationIcon, SearchIcon } from '@/components/icons';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/Logo.svg';

export default function TopBar() {
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
              <span className='text-sm font-semibold'>Hawkins Maru</span>
              <span className='text-gray80 text-sm'>Company Manager</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
