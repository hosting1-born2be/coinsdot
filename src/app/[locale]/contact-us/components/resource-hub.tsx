'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Link as NavLink } from '@/i18n/navigation';

import { FbIcon } from '@/shared/ui/icons/fb';
import { InstIcon } from '@/shared/ui/icons/inst';
import { LinkedInIcon } from '@/shared/ui/icons/linkedin';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ResourceHub = () => {
  const t = useTranslations('contacts.resourceHub');

  return (
    <section className="container flex flex-col max-lg:pt-10">
      <div className="flex flex-col rounded-3xl bg-[#120A34] p-2">
        <section className="relative flex flex-col gap-10 overflow-hidden px-10 py-16 max-md:px-5 max-md:py-9">
          <div className="flex flex-col gap-5">
            <Title className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
              {t('title.0', { fallback: 'Your Go-To' })} <br />
              {t('title.1', { fallback: 'Resource Hub' })}
            </Title>
            <Text size="2xl" className="max-md:text-lg">
              {t('text.0', {
                fallback: 'From onboarding steps to exchange walkthroughs',
              })}{' '}
              — <br />
              {t('text.1', { fallback: 'many answers are already here' })}
            </Text>
          </div>
          <div className="flex items-center gap-[36px] max-md:flex-col max-md:items-start">
            <NavLink href="/crypto-insights">
              <Button
                variant="primary"
                size="xl"
                className="w-[198px] font-bold max-md:w-full max-md:max-w-[300px]"
              >
                {t('button.0', { fallback: 'Insights' })}
              </Button>
            </NavLink>
            <NavLink href="/qa">
              <Button
                variant="faded"
                size="xl"
                className="w-[172px] font-bold max-md:w-full max-md:max-w-[300px]"
              >
                {t('button.1', { fallback: 'Q&A' })}
              </Button>
            </NavLink>
          </div>
          <Image
            className="absolute right-0 -bottom-[80%] max-lg:hidden"
            src="/images/contacts/circles.svg"
            alt="circles"
            width={700}
            height={700}
          />
        </section>
        {/* <section className="flex flex-col gap-[64px] rounded-2xl bg-[#F0F2F7] p-8 max-md:px-4 max-md:py-8">
          <div className="flex flex-col gap-5">
            <Title
              color="black"
              className="text-[60px] leading-[60px] tracking-[-1.2px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]"
            >
              {t('title2.0', { fallback: 'Updates, Tips & Announcements:' })}{' '}
              <br />{' '}
              <span className="font-bold">
                {t('title2.1', { fallback: 'Join Us Online' })}
              </span>
            </Title>
            <Text size="lg" color="black">
              {t('text2', {
                fallback:
                  'Follow us for product updates, practical explanations, and behind-the-scenes information.',
              })}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <SocialLayout href="https://www.facebook.com/">
              <FbIcon />
            </SocialLayout>
            <SocialLayout href="https://www.linkedin.com/">
              <LinkedInIcon />
            </SocialLayout>
            <SocialLayout href="https://www.instagram.com/">
              <InstIcon />
            </SocialLayout>
          </div>
        </section> */}
      </div>
    </section>
  );
};

const SocialLayout = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="flex h-[100px] w-full flex-1 items-center justify-center rounded-lg bg-[rgba(17,18,18,0.20)]"
  >
    {children}
  </Link>
);
