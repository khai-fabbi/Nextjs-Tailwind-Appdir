import * as React from 'react';

import Button from '@/components/buttons/Button';

export default function Property() {
  return (
    <section>
      <div className='flex items-center justify-between gap-x-2'>
        <h3>Property List</h3>
        <Button>+ Add Property</Button>
      </div>
      <div className='bg-grayfc mt-5 flex flex-col gap-y-6 rounded-2xl p-5'>
        <div className='filter'></div>
        <div className='list-card'></div>
      </div>
    </section>
  );
}
