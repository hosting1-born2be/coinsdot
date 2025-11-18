'use client';

import type { ReactNode } from 'react';

import { Link } from '@/i18n/navigation';

export const NavigateButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="group flex h-10 w-10 items-center justify-center rounded-[8px] bg-white transition duration-300 ease-in-out hover:bg-black active:bg-white"
  >
    {children}
  </Link>
);
