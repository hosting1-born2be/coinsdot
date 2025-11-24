'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

import { GbIcon } from '../icons/gb-icon';
import { SkIcon } from '../icons/sk-icon';

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const t = useTranslations('langSwitcher');

  const switchLanguage = useCallback(
    (value: string) => {
      const pathWithoutLocale = pathname.replace(/^\/(en|sk)/, '');
      const newPath = `/${value}${pathWithoutLocale}`;
      console.log('newPath', newPath);
      router.replace(newPath);
    },
    [pathname, router],
  );

  const languages = [
    { value: 'en', label: t('english', { fallback: 'English' }), icon: GbIcon },
    { value: 'sk', label: t('slovak', { fallback: 'Slovak' }), icon: SkIcon },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer outline-0 max-md:w-full max-md:flex-1">
        <span className="flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[rgba(240,242,247,0.08)] px-2 font-bold max-md:w-full max-md:flex-1">
          {languages.find(({ value }) => value === locale)?.label}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-900 flex w-[159px] flex-col overflow-hidden bg-[rgba(7,13,25,0.16)] p-4 backdrop-blur-md"
        >
          {languages.map(({ icon: Icon, label, value }) => (
            <DropdownMenuItem
              key={label}
              onClick={() => {
                setOpen(false);
                switchLanguage(value);
              }}
              className={cn(
                'flex cursor-pointer items-center gap-2 border-b border-white/5 p-3 outline-0 last:border-b-0',
                locale === value &&
                  'rounded-lg bg-[rgba(240,242,247,0.08)] p-2',
              )}
            >
              <Icon />
              <Text color="grey">{label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
