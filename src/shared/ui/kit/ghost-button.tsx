'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import type { ButtonVariants } from './button';
import { Button } from './button';

export const GhostButton = ({
  children,
  className,
  onClick,
  size = 'lg',
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: ButtonVariants['size'];
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [btnWidth, setBtnWidth] = useState(0);

  useEffect(() => {
    if (!btnRef.current) return;

    const handleResize = () => {
      setBtnWidth(btnRef.current!.offsetWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="group relative h-[96px] max-md:h-[68px]"
      style={
        {
          // keep only one var: the raw button width (px)
          '--btn-width': `${btnWidth}px`,
        } as React.CSSProperties
      }
    >
      <span
        className="ghost-large pointer-events-none absolute right-0 bottom-0 z-10 h-full origin-right rounded-full bg-white/30"
        aria-hidden
      />

      <span
        className="ghost-small pointer-events-none absolute right-0 bottom-0 z-10 h-full origin-right rounded-full bg-white/50"
        aria-hidden
      />

      <Button
        ref={btnRef}
        size={size}
        variant="ghost"
        className={cn('relative z-30', className)}
        onClick={onClick}
      >
        {children}
        <ArrowIcon className="max-md:h-[60px] max-md:w-[60px]" />
      </Button>
    </div>
  );
};
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="92"
    height="92"
    viewBox="0 0 92 92"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 46C1 70.853 21.147 91 46 91C70.853 91 91 70.853 91 46C91 21.147 70.853 1 46 1C21.147 1 1 21.147 1 46ZM46 0C20.595 0 0 20.595 0 46C0 71.405 20.595 92 46 92C71.405 92 92 71.405 92 46C92 20.595 71.405 0 46 0Z"
      fill="#3066ED"
    />
    <path
      d="M49.2246 36.7954L58.5825 46.1533L49.2246 55.5112"
      stroke="#1E59EB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.374 46.1533H58.3203"
      stroke="#1E59EB"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
