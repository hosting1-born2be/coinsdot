'use client';

import type { ReactNode } from 'react';
import { Activity, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { CloseIcon } from '@/shared/ui/icons/close';
import { FacebookIcon } from '@/shared/ui/icons/facebook';
import { InstagramIcon } from '@/shared/ui/icons/instagram';
import { LinkedInIcon } from '@/shared/ui/icons/linked-in';
import { ThreeLinesIcon } from '@/shared/ui/icons/three-lines';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('header');

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[rgba(7,13,25,0.16)] pb-8 backdrop-blur-lg max-md:px-4!">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between py-4">
          <Text size="lg">Logo</Text>
          <section className="flex items-center gap-5">
            <div className="flex items-center gap-10 max-md:hidden">
              <NavButton>English</NavButton>
              <div className="flex items-center gap-5 max-md:hidden">
                <Text size="lg">{t('signUp', { fallback: 'sign up' })}</Text>
                <Text size="lg">{t('logIn', { fallback: 'log in' })}</Text>
              </div>
            </div>
            <Button
              size="sm"
              variant="solid"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen
                ? t('close', { fallback: 'close' })
                : t('menu', { fallback: 'menu' })}
              {isOpen ? <CloseIcon /> : <ThreeLinesIcon />}
            </Button>
          </section>
        </div>
        <Activity mode={isOpen ? 'visible' : 'hidden'}>
          <div className="flex flex-col gap-9">
            <section className="flex max-md:flex-col max-md:gap-4">
              <div className="flex w-1/2 flex-col gap-4 max-md:w-full">
                <Link href="/inside-coinsdot">
                  <Text className="text-[36px] leading-[120%] tracking-[-0.54px]">
                    {t('insideCoinsdot', { fallback: 'Inside Coinsdot' })}
                  </Text>
                </Link>
                <Link href="/user-essentials">
                  <Text className="text-[36px] leading-[120%] tracking-[-0.54px]">
                    {t('userEssentials', { fallback: 'User Essentials' })}
                  </Text>
                </Link>
                <Link href="/partnerships">
                  <Text className="text-[36px] leading-[120%] tracking-[-0.54px]">
                    {t('partnerships', { fallback: 'Partnerships' })}
                  </Text>
                </Link>
              </div>
              <div className="flex w-1/2 flex-col gap-4 max-md:w-full">
                <Link href="/qa">
                  <Text className="text-[36px] leading-[120%] tracking-[-0.54px]">
                    {t('qa', { fallback: 'Q&A' })}
                  </Text>
                </Link>
                <Link href="/crypto-insights">
                  <Text className="text-[36px] leading-[120%] tracking-[-0.54px]">
                    {t('cryptoInsights', { fallback: 'Crypto Insights' })}
                  </Text>
                </Link>
                <Link href="/contact-us">
                  <Text className="text-[36px] leading-[120%] tracking-[-0.54px]">
                    {t('contactUs', { fallback: 'Contact Us' })}
                  </Text>
                </Link>
              </div>
            </section>
            <section className="hidden flex-col gap-10 max-md:flex">
              <div className="flex gap-5 border-t border-t-white/15 py-2">
                <Text
                  size="lg"
                  className="flex-1 text-[36px] leading-[120%] tracking-[-0.54px]"
                >
                  {t('signUp', { fallback: 'sign up' })}
                </Text>
                <Text
                  size="lg"
                  className="flex-1 text-[36px] leading-[120%] tracking-[-0.54px]"
                >
                  {t('logIn', { fallback: 'log in' })}
                </Text>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <NavButton>
                    <FacebookIcon />
                  </NavButton>
                  <NavButton>
                    <LinkedInIcon />
                  </NavButton>
                  <NavButton>
                    <InstagramIcon />
                  </NavButton>
                </div>
                <div>
                  <NavButton>English</NavButton>
                </div>
              </div>
            </section>
          </div>
        </Activity>
      </div>
    </header>
  );
};

const NavButton = ({ children }: { children: ReactNode }) => (
  <button className="flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[rgba(240,242,247,0.08)] px-2 font-bold max-md:w-full max-md:flex-1">
    {children}
  </button>
);
