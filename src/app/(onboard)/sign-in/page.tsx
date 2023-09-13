'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { LoginUserSchema } from '@/lib/validations/user.schema';

import Button from '@/components/buttons/Button';
import { Loading } from '@/components/common';
import PrimaryLink from '@/components/links/PrimaryLink';

interface SignUpFormValue {
  email: string;
  password: string;
}
export default function SignIn() {
  const router = useRouter();
  const handleSignIn = (formValue: SignUpFormValue) => {
    console.log(formValue); // eslint-disable-line no-console

    router.push('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValue>({
    resolver: zodResolver(LoginUserSchema),
  });

  return (
    <form
      className='-mt-28 w-[400px] rounded-xl bg-white p-8 text-center'
      onSubmit={handleSubmit(handleSignIn)}
      noValidate
    >
      {isSubmitting && <Loading />}
      <h2>Welcome back</h2>
      <p className='text-gray80 mt-2.5'>
        Welcome back! Please enter your details.
      </p>
      <div className='mt-8 flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='email' className='text-left text-sm font-medium'>
            Email
          </label>
          <input
            id='email'
            placeholder='Enter your name'
            {...register('email')}
            className={twMerge(
              'border-graye4 rounded-md shadow-none outline-none ring-0',
              errors.email &&
                'border-red-500 focus:border-red-500 focus:outline-none focus:ring-0'
            )}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label
            htmlFor='current-password'
            className='text-left text-sm font-medium'
          >
            Password
          </label>
          <input
            id='current-password'
            autoComplete='on'
            type='password'
            placeholder='Enter your password'
            {...register('password')}
            className={twMerge(
              'border-graye4 rounded-md shadow-none outline-none ring-0',
              errors.password &&
                'border-red-500 focus:border-red-500 focus:outline-none focus:ring-0'
            )}
          />
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <label className='flex items-center gap-x-1.5'>
          <input
            type='checkbox'
            id='remember'
            className='rounded focus:ring-0'
          />
          <p className='text-sm font-medium'>Rememner for 30 days</p>
        </label>
        <PrimaryLink className='text-sm font-medium' href='/'>
          Forgot Password
        </PrimaryLink>
      </div>
      <Button
        className='mt-5 w-full justify-center rounded-md'
        type='submit'
        isLoading={isSubmitting}
      >
        Login
      </Button>
      <Button
        className='mt-4 w-full justify-center rounded-md'
        type='button'
        isLoading={isSubmitting}
        variant='outline'
      >
        <Image
          width={20}
          height={20}
          src='/images/icon-google.png'
          alt='google icon'
          className='mr-2.5'
        />
        Sign in with Google
      </Button>

      <p className='text-gray80 mt-8'>
        Don’t have an account? <PrimaryLink href='/'>Sign up</PrimaryLink>
      </p>
    </form>
  );
}
