'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

import st from './button.module.css';

const btnVariants = cva(
  'rounded-full flex items-center disabled:cursor-not-allowed outline-0 disabled:opacity-50 transition duration-300 ease-in-out cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'border border-[rgba(255,255,255,0.15)] text-white',
        secondary:
          'bg-azure-10 border border-azure-10 text-white hover:bg-azure-10/80',
        solid: 'bg-white hover:bg-white/80 border border-white text-black',
        ghost: 'bg-white text-[#1E59EB] border border-white hover:bg-white/80',
        faded:
          'text-black border-2 border-[rgba(17,18,18,0.20)] [background:linear-gradient(207deg,_var(--color-azure-90,_#DEE2EC)_16.8%,_var(--color-grey-9564,_rgba(240,_242,_247,_0.64))_91.44%)]',
      },
      size: {
        sm: 'h-10 pl-3 pr-2 gap-2 text-sm font-extralight',
        md: 'h-[50px] px-8',
        lg: 'h-[96px] max-md:h-[68px] text-lg font-extralight gap-2.5 justify-center pl-5 pr-0.5',
        xl: 'h-[100px] px-8 justify-center',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  variant,
  onClick,
  disabled,
  size,
  fullWidth = false,
  type = 'button',
  as = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  as?: 'button' | 'span';
} & ButtonVariants) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        btnVariants({ variant, size }),
        variant === 'primary' && st.primary,
        fullWidth ? 'w-full justify-center' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
