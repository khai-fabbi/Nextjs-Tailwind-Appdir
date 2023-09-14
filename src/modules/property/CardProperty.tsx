import Image from 'next/image';

import ChipPrimary from '@/components/chip/ChipPrimary';
import { BedIcon, LocationIcon, PlusIcon } from '@/components/icons';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function CardProperty() {
  return (
    <UnstyledLink className='flex gap-x-2.5' href='/'>
      <div className='relative'>
        <Image
          width={200}
          height={125}
          alt='image'
          src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
          className='shrink-0 rounded-lg object-cover'
        />
      </div>
      <div className='flex flex-1 flex-col gap-y-3'>
        <ChipPrimary>$7400</ChipPrimary>
        <div>
          <h6 className='font-semibold'>Metro Jayakarta Hotel & Spa</h6>
          <div className='mt-1.5 flex items-center gap-x-1.5'>
            <LocationIcon />
            <span className='text-gray80 text-sm'>North Carolina, USA</span>
          </div>
        </div>
        <div className='flex items-center gap-x-8'>
          <div className='flex items-center gap-x-1.5'>
            <BedIcon />
            <span className='text-sm font-medium'>6 Beds</span>
          </div>
          <div className='flex items-center gap-x-1.5'>
            <PlusIcon />
            <span className='text-sm font-medium'>29 M</span>
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
}
