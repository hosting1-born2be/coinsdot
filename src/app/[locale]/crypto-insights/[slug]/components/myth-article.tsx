'use client';

import { useTranslations } from 'next-intl';

import { ArticleContent } from '@/features/articles/ui/article-content';
import { ArticleHero } from '@/features/articles/ui/article-hero';
import { ArticleSection } from '@/features/articles/ui/article-section';
import { ArticleText } from '@/features/articles/ui/article-text';

export const MythArticle = () => {
  const t = useTranslations('mythArticle');

  return (
    <>
      <ArticleHero
        title={t('hero.title', {
          fallback: 'Myth: Crypto Is Only for Developers and Tech Geeks',
        })}
        description={t('hero.description', {
          fallback:
            "Cryptocurrency often carries an image of being a niche interest for developers, miners, or tech enthusiasts. However, this perception doesn't align with the current landscape. In reality, crypto is becoming an integral part of everyday life, accessible to a broader audience than ever before.",
        })}
      />
      <ArticleContent
        imgUrl="/images/crypto-insights/banner.jpg"
        imgClassName="object-[65%]"
      >
        <ArticleSection
          title={t('content.0.title', {
            fallback: 'Global Retailers Engaging with Crypto',
          })}
        >
          <ArticleText>
            {t('content.0.text', {
              fallback:
                "Contrary to the belief that cryptocurrency is confined to online platforms, numerous global retailers are now engaging with crypto by integrating exchange options and accepting digital assets as a method of settlement. Major brands, including Microsoft, PayPal, Starbucks, and McDonald's, have enabled cryptocurrency payments, showing the growing recognition of digital assets in mainstream commerce.",
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.1.title', {
            fallback: 'Online Services Supporting Crypto',
          })}
        >
          <ArticleText>
            {t('content.1.text', {
              fallback:
                'The use of cryptocurrency extends beyond physical stores. Various online services now accept digital assets, further broadening their utility. Platforms such as Overstock, ExpressVPN, and AT&T already accommodate crypto in transactions, highlighting the expanding role of digital currencies in online activities.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.2.title', {
            fallback: 'Crypto in Real Estate: Bitcoin-Backed Mortgages',
          })}
        >
          <ArticleText>
            {t('content.2.text', {
              fallback:
                'In a groundbreaking development, Australia has introduced its first Bitcoin-backed mortgage. This product allows borrowers to use Bitcoin as collateral for home loans, offering an alternative avenue for property ownership. Such advancements underline the ongoing integration of cryptocurrency into traditional financial systems.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.3.title', {
            fallback: 'The Future of Crypto Alongside Fiats',
          })}
        >
          <ArticleText>
            {t('content.3.text', {
              fallback:
                'The trajectory of cryptocurrency adoption suggests a future in which digital currencies coexist with traditional fiat currencies. As more businesses and services integrate crypto, and with innovations such as Bitcoin-backed mortgages, the relevance of cryptocurrency in everyday financial systems continues to grow. While challenges remain, the overall direction points toward a landscape where crypto and fiat work side by side.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.4.title', {
            fallback: 'Coinsdot: Your Gateway to Crypto Exchange',
          })}
        >
          <ArticleText>
            {t('content.4.text.0', {
              fallback:
                'At Coinsdot, we make cryptocurrency practical by providing a clear way to exchange Bitcoin and Ethereum with fiat currencies. Our platform is designed for both newcomers and experienced users who want to convert between digital and traditional assets. By focusing on compliance and structured processes, Coinsdot enables crypto to become part of everyday financial activity.',
            })}
            <br />
            <br />
            {t('content.4.text.1', {
              fallback:
                "With this article, we aim to debunk the myth that cryptocurrency is only for developers and enthusiasts, showing instead how it is steadily entering mainstream use. If you'd like to learn more about how to exchange crypto into fiat, or fiat into crypto, the Coinsdot team is here to help.",
            })}
          </ArticleText>
        </ArticleSection>
      </ArticleContent>
    </>
  );
};
