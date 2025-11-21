'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const IconLayout = ({
  children,
  color = 'white',
}: {
  children: ReactNode;
  color?: 'white' | 'grey';
}) => (
  <div
    className={cn(
      'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
      color === 'white' && 'bg-white',
      color === 'grey' && 'bg-[#F0F2F7]',
    )}
  >
    {children}
  </div>
);
