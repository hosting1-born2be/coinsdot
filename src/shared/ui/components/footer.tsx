'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="container flex flex-col gap-[50px] py-[100px]">
      <section className="flex justify-between gap-[50px] max-md:flex-col">
        <Banner />
        <section className="flex flex-col gap-10">
          <div className="flex gap-10 max-[1360px]:flex-col">
            <MenuBlock
              title={t('customer.title', { fallback: 'Customer' })}
              items={[
                {
                  label: t('customer.items.0', { fallback: 'User Essentials' }),
                  href: '/user-essentials',
                },
                {
                  label: t('customer.items.1', { fallback: 'Q&A' }),
                  href: '/qa',
                },
                {
                  label: t('customer.items.2', { fallback: 'Crypto Insights' }),
                  href: '/crypto-insights',
                },
              ]}
            />
            <MenuBlock
              title={t('company.title', { fallback: 'Company' })}
              items={[
                {
                  label: t('company.items.0', { fallback: 'Inside Coinsdot' }),
                  href: '/inside-coinsdot',
                },
                {
                  label: t('company.items.1', { fallback: 'Partnership' }),
                  href: '/partnership',
                },
                {
                  label: t('company.items.2', { fallback: 'Contact Us' }),
                  href: '/contact-us',
                },
              ]}
            />
          </div>
          <div className="flex gap-10 max-[1360px]:flex-col max-[1360px]:gap-2.5">
            <MenuBlock
              title={t('legal.title', { fallback: 'Legal' })}
              items={[
                {
                  label: t('legal.items.0', { fallback: 'Terms & Conditions' }),
                  href: '/terms-and-conditions',
                },
                {
                  label: t('legal.items.1', { fallback: 'AML Policy' }),
                  href: '/aml-policy',
                },
                {
                  label: t('legal.items.2', { fallback: 'Privacy Policy' }),
                  href: '/privacy-policy',
                },
                {
                  label: t('legal.items.3', {
                    fallback: 'Return and  Cancellation Policy',
                  }),
                  href: '/return-policy',
                },
              ]}
            />
            <MenuBlock
              items={[
                {
                  label: t('legal.items.4', {
                    fallback: 'Complains Procedure',
                  }),
                  href: '/complains-procedure',
                },
                {
                  label: t('legal.items.5', { fallback: 'Cookie Policy' }),
                  href: '/cookie-policy',
                },
                {
                  label: t('legal.items.6', { fallback: 'Risk Disclosure' }),
                  href: '/risk-disclosure',
                },
              ]}
            />
          </div>
        </section>
      </section>
      <ImportantNotice />
      <Text size="lg" color="grey">
        © {new Date().getFullYear()} Coinsdot.io{' '}
        <span className="opacity-50">
          — {t('copyright', { fallback: 'Crypto. Fiat. Exchanged.' })}
        </span>
      </Text>
    </footer>
  );
};

const ImportantNotice = () => {
  const t = useTranslations('footer.importantNotice');

  return (
    <section className="flex flex-col gap-1 rounded-3xl border border-[#293656] px-10 py-2.5">
      <Title as="h4" size="lg" weight={600}>
        {t('title', { fallback: 'Important Notice' })}
      </Title>
      <Text>
        {t('text', {
          fallback:
            'This website and its content are intended only for users outside the United Kingdom. The information presented here is not directed to, or intended for use by, individuals or entities based in the UK. The services offered on Coinsdot.io are not available to UK retail clients. Please note that in the UK, cryptoassets are classified as Restricted Mass Market Investments — a high-risk category that may not be appropriate for most retail investors.',
        })}
      </Text>
    </section>
  );
};

const Banner = () => {
  const t = useTranslations('footer.banner');

  return (
    <article className="relative flex h-[780px] w-[509px] flex-col gap-3 overflow-hidden rounded-3xl bg-[#293656] p-8 max-md:h-[505px] max-md:w-full">
      <Title
        as="h3"
        weight={700}
        className="text-[96px] leading-[96px] tracking-[-7px] max-lg:text-[60px] max-lg:leading-[110%] max-lg:tracking-[-1.2px]"
      >
        {t('title', { fallback: 'Coinsdot' })}
      </Title>
      <Text size="lg">
        {t('text', { fallback: 'Coinsdot: Your Gateway to Crypto and Fiat.' })}
      </Text>
      <Text>
        {t('description', {
          fallback:
            'Coinsdot is owned and operated by Company Name, identification number Registration Number, authorised to provide virtual currency service, with registered and operational address at Registered Address.',
        })}
      </Text>
      <Image
        className="absolute bottom-8 left-0 max-md:-bottom-8 max-md:left-1/2 max-md:h-[277px] max-md:w-[350px] max-md:-translate-x-1/2"
        src="/images/footer.svg"
        alt="footer"
        width={563}
        height={470}
      />
    </article>
  );
};

const MenuBlock = ({
  items,
  title,
}: {
  title?: string;
  items: { label: string; href: string }[];
}) => (
  <div className="flex w-[380px] flex-col gap-2.5 max-[1360px]:w-full">
    <Text
      size="lg"
      className={cn('opacity-50', !title && 'opacity-0 max-[1360px]:hidden')}
    >
      {title ?? 'Heading'}
    </Text>
    <ul className="flex flex-col gap-4">
      {items.map(item => (
        <li
          key={item.label}
          className="transition duration-300 ease-in-out hover:opacity-50"
        >
          <Link href={item.href}>
            <Title
              as="h5"
              size="3xl"
              color="grey"
              className="text-[36px] leading-[120%] tracking-(--letter-spacing--0_75,-0.749px)"
            >
              {item.label}
            </Title>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
