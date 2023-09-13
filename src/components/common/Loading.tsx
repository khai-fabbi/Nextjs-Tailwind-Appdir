import Spinner from '@/components/common/Spinner';

export default function Loading() {
  return (
    <div className='absolute inset-0 flex h-[100vh] items-center justify-center bg-black/[.1]'>
      <Spinner height='2rem' width='2rem' className='-mt-28' />
    </div>
  );
}
