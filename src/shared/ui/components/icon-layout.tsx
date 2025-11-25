'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const IconLayout = ({
  children,
  color = 'white',
  className,
}: {
  children: ReactNode;
  color?: 'white' | 'grey';
  className?: string;
}) => (
  <div
    className={cn(
      'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ease-in-out',
      color === 'white' && 'bg-white',
      color === 'grey' && 'bg-[#F0F2F7]',
      className,
    )}
  >
    {children}
  </div>
);
