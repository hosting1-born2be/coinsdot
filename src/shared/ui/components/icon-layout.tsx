'use client';

import type { ReactNode } from 'react';

export const IconLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
    {children}
  </div>
);
