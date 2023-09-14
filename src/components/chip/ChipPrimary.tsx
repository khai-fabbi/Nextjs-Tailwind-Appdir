import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function ChipPrimary({ children }: IProps) {
  return (
    <span className='text-primary bg-secondary inline-block w-fit rounded-md px-2.5 py-2 text-xs font-semibold'>
      {children}
    </span>
  );
}
