import * as React from 'react';

import Button from '@/components/buttons/Button';

import { CardProperty } from '@/modules/property';

export default function Property() {
  return (
    <section>
      <div className='flex items-center justify-between gap-x-2'>
        <h3>Property List</h3>
        <Button>+ Add Property</Button>
      </div>
      <div className='bg-grayfc mt-5 flex flex-col gap-y-6 rounded-2xl p-5'>
        <div className='filter'></div>
        <div className='list-card grid grid-cols-2 gap-x-16 gap-y-6'>
          {new Array(8).fill(0).map((_, idx) => {
            return <CardProperty key={idx} />;
          })}
        </div>
        <div className='pagination'></div>
      </div>
    </section>
  );
}
