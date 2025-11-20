'use client';

import { useTranslations } from 'next-intl';

import { ArticleContent } from '@/features/articles/ui/article-content';
import { ArticleHero } from '@/features/articles/ui/article-hero';
import { ArticleList } from '@/features/articles/ui/article-list';
import { ArticleSection } from '@/features/articles/ui/article-section';
import { ArticleText } from '@/features/articles/ui/article-text';

export const KycArticle = () => {
  const t = useTranslations('whyKycArticle');

  return (
    <>
      <ArticleHero
        title={t('hero.title', {
          fallback: 'Why KYC Matters in Crypto Exchange',
        })}
        description={t('hero.description', {
          fallback:
            'If you’ve ever signed up for a financial service, chances are you’ve gone through KYC — “Know Your Customer.” In the cryptocurrency world, some users view it as an obstacle, but in reality, it’s a safeguard that ensures exchanges operate securely and in compliance with international regulations. At Coinsdot, KYC is integral to making cryptocurrency exchange work smoothly and reliably.',
        })}
      />
      <ArticleContent imgUrl="/images/crypto-insights/article-2.jpg">
        <ArticleSection
          title={t('content.0.title', {
            fallback: 'Why KYC Is Required',
          })}
        >
          <ArticleText>
            {t('content.0.text.0', {
              fallback:
                'Unlike cash, crypto transactions cross borders instantly and without intermediaries. This freedom also makes it important to verify who is sending and receiving funds. KYC helps prevent money laundering, fraud, and misuse of digital assets. It also gives you confidence that the platform you are working with is compliant and trusted.',
            })}
          </ArticleText>
          <ArticleText>
            {t('content.0.text.1', {
              fallback:
                'For you as a user, completing KYC means your exchange transactions are processed without unnecessary holds or questions. It ensures that conversions between crypto and fiat are handled efficiently and accepted in line with global standards.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.1.title', {
            fallback: 'What You Will Be Asked to Provide',
          })}
        >
          <ArticleText>
            {t('content.1.text.0', {
              fallback:
                'The KYC process is straightforward, but it does require a few documents to confirm your identity and source of funds. Typically, you will be asked for:',
            })}
          </ArticleText>
          <ArticleList
            values={[
              t('content.1.list.0', {
                fallback:
                  'A valid government-issued ID such as a passport, national identity card, or residence permit.',
              }),
              t('content.1.list.1', {
                fallback:
                  'Proof of address — for example, a recent utility bill or bank statement with your name on it.',
              }),
              t('content.1.list.2', {
                fallback:
                  'A signed declaration of your source of funds, sometimes with supporting evidence.',
              }),
            ]}
          />
          <ArticleText>
            {t('content.1.text.1', {
              fallback:
                'The Coinsdot process may also include a brief verification call, along with simple questionnaires to confirm the purpose of exchange transactions and ensure compliance. These steps don’t take long, but they are essential for regulatory standards.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.2.title', {
            fallback: 'The Result: Smooth, Compliant Exchange',
          })}
        >
          <ArticleText>
            {t('content.2.text.0', {
              fallback:
                'Once your KYC is approved, you can exchange crypto and fiat without interruptions. Each transaction is directly recorded on the blockchain, while Coinsdot ensures that everything aligns with compliance requirements.',
            })}
          </ArticleText>
          <ArticleText>
            {t('content.2.text.1', {
              fallback:
                'Importantly, Coinsdot works as a non-custodial service: we never hold your funds. KYC doesn’t change that — it simply gives you verified access to an exchange channel where crypto moves directly from your wallet through the conversion process and back to your chosen account.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.3.title', {
            fallback: 'In Short',
          })}
        >
          <ArticleText>
            {t('content.3.text.0', {
              fallback:
                'KYC might seem like paperwork, but in practice, it’s your entry ticket to reliable crypto exchange. By confirming your identity once, you open the door to a system where conversions between Bitcoin, Ethereum, and fiat can be completed efficiently, transparently, and in compliance with all relevant regulations.',
            })}
          </ArticleText>
          <ArticleText>
            {t('content.3.text.1', {
              fallback:
                'The Coinsdot process is designed to be clear and effective: provide your documents, complete verification, and start exchanging crypto with confidence.',
            })}
          </ArticleText>
        </ArticleSection>
      </ArticleContent>
    </>
  );
};
