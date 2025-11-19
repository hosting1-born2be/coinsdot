'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const Badge = ({
  children,
  active = false,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    className={cn(
      'flex cursor-pointer rounded-full border border-transparent bg-transparent px-5 py-2.5 text-left',
      active && 'border-white',
    )}
    onClick={onClick}
  >
    <span className="text-lg font-bold text-white">{children}</span>
  </button>
);
