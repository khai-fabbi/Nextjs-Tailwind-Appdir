'use client';

import React, { useEffect, useRef } from 'react';

import { Button } from '@/components/buttons';

import { useStore } from '@/stores/useStore';

export default function LearnReactLayout() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isAuthenticated = useStore((state) => state.authenticated);
  console.log(isAuthenticated);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);
  return (
    <section>
      <h3>Learn React</h3>
      <div className='mt-5'>
        <input
          ref={inputRef}
          type='text'
          className='border-graye4 rounded-md shadow-none outline-none ring-0'
          placeholder='Enter your text'
        />
        <Button
          onClick={() => console.log('input text : ', inputRef.current?.value)}
        >
          Submit
        </Button>
      </div>
    </section>
  );
}
