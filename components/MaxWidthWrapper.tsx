import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div
      className={cn('mx-auto max-w-xl px-5 sm:px-6 lg:px-8 pt-20 pb-32 lg:max-w-7xl', className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
