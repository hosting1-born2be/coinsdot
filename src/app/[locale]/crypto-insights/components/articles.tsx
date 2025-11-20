'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { articlesSlugs } from '@/features/articles/model/articles';

import { cn } from '@/shared/lib/utils/cn';
import { NavigateButton } from '@/shared/ui/components/navigate-button';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getArticles = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('0.title', { fallback: 'Understanding How Crypto Wallets Work' }),
    description: t('0.description', {
      fallback:
        'Think your crypto wallet “stores” your Bitcoin or Ethereum? The truth is more fascinating. Learn how wallets manage keys, how transactions are verified on the blockchain, and how Coinsdot ensures your transactions stay secure and under your control.',
    }),
    href: `/crypto-insights/${articlesSlugs.understanding}`,
    imgUrl: '/images/crypto-insights/article-1.jpg',
  },
  {
    title: t('1.title', { fallback: 'Why KYC Matters in Crypto Exchange' }),
    description: t('1.description', {
      fallback:
        'Understanding why KYC is essential in crypto exchange is key to building trust and confidence in the digital asset market. Learn how KYC protects both users and the platform, ensuring a secure and compliant environment.',
    }),
    href: `/crypto-insights/${articlesSlugs.whyKyc}`,
    imgUrl: '/images/crypto-insights/article-2.jpg',
    reverse: true,
  },
  {
    title: t('2.title', {
      fallback: 'MiCA: Reshaping Europe’s Financial and Crypto Landscape',
    }),
    description: t('2.description', {
      fallback:
        'MiCA is transforming crypto in Europe. From unified rules to stronger user protections, discover how this regulation is reshaping the financial landscape and what it means for crypto exchanges like Coinsdot.',
    }),
    href: `/crypto-insights/${articlesSlugs.mica}`,
    imgUrl: '/images/crypto-insights/article-3.jpg',
  },
];

export const Articles = () => {
  const t = useTranslations('cryptoInsights.articles');

  return (
    <section className="container flex flex-col gap-2.5 py-16">
      {getArticles(t).map(article => (
        <ArticleItem key={article.title} {...article} />
      ))}
    </section>
  );
};

const ArticleItem = ({
  description,
  href,
  title,
  imgUrl,
  reverse = false,
}: {
  imgUrl: string;
  title: string;
  description: string;
  href: string;
  reverse?: boolean;
}) => (
  <article
    className={cn(
      'flex items-end rounded-3xl bg-[#120A34] p-2 max-lg:flex-col-reverse',
      reverse && 'flex-row-reverse',
    )}
  >
    <Image
      className="h-[584px] w-1/2 rounded-3xl object-cover max-lg:w-full max-md:h-[300px]"
      src={imgUrl}
      alt="article"
      width={678}
      height={584}
    />
    <section className="flex w-1/2 flex-col gap-8 p-6 max-lg:w-full">
      <div className="flex flex-col gap-2.5">
        <Title
          size="3xl"
          weight={600}
          className="text-[36px] leading-[40px] tracking-[-0.72px] max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-0.48px]"
        >
          {title}
        </Title>
        <Text size="lg" className="max-md:text-lg">
          {description}
        </Text>
      </div>
      <NavigateButton href={href}>
        <ArrowRightIcon className="transition duration-300 ease-in-out group-hover:[&>path]:stroke-white" />
      </NavigateButton>
    </section>
  </article>
);
