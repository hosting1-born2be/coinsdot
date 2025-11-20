'use client';

import { useTranslations } from 'next-intl';

import { ArticleContent } from '@/features/articles/ui/article-content';
import { ArticleHero } from '@/features/articles/ui/article-hero';
import { ArticleList } from '@/features/articles/ui/article-list';
import { ArticleSection } from '@/features/articles/ui/article-section';
import { ArticleText } from '@/features/articles/ui/article-text';

export const UnderstandingArticle = () => {
  const t = useTranslations('understandingArticle');

  return (
    <>
      <ArticleHero
        title={t('hero.title', {
          fallback: 'Understanding How Crypto Wallets Work',
        })}
        description={t('hero.description', {
          fallback:
            'Most people see a crypto wallet as “an app that holds your Bitcoin or Ethereum.” But the truth is more interesting: wallets don’t actually store coins. Instead, they store the keys that prove ownership of your funds on the blockchain. Understanding how a wallet functions will give you confidence in every transaction you make.',
        })}
      />
      <ArticleContent
        imgUrl="/images/crypto-insights/article-1.jpg"
        imgClassName="object-[38%]"
      >
        <ArticleSection
          title={t('content.0.title', {
            fallback: 'Inside the Wallet: What Really Happens',
          })}
        >
          <ArticleText>
            {t('content.0.text.0', {
              fallback:
                'When you open your wallet, you are essentially looking at an interface that manages two key components: your public address (where funds can be sent) and your private key (which serves as your proof of ownership). The private key never leaves the wallet, but it’s what signs every transaction you approve.',
            })}
            <br />
            {t('content.0.text.1', {
              fallback: 'So, what happens when you decide to send crypto?',
            })}
          </ArticleText>
          <ArticleList
            values={[
              t('content.0.list.0', {
                fallback: 'You enter the recipient’s address and the amount.',
              }),
              t('content.0.list.1', {
                fallback:
                  'Your wallet creates a digital message and signs it with your private key.',
              }),
              t('content.0.list.2', {
                fallback:
                  'The signed transaction is sent to the blockchain network, where nodes verify its validity.',
              }),
            ]}
          />
          <ArticleText>
            {t('content.0.text.2', {
              fallback:
                'At this stage, the coins don’t “move” from one digital pocket to another. Instead, the blockchain updates its ledger: your balance decreases, and the recipient’s balance increases. Think of it as updating rows in a giant public spreadsheet that everyone can see.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.1.title', {
            fallback: 'Outside the Wallet: Following the Transaction',
          })}
        >
          <ArticleText>
            {t('content.1.text.0', {
              fallback:
                'Once your wallet sends the transaction, it is picked up by the blockchain network. Validators or miners confirm it, add it to a block, and the payment becomes permanent. That’s when the recipient sees the funds in their wallet.',
            })}
          </ArticleText>
          <ArticleText>
            {t('content.1.text.1', {
              fallback:
                'If you want to check where your transaction stands, you don’t have to trust the app alone. By entering the transaction ID on a public explorer, such as blockchain.com, you can view when it was received, confirmed, and recorded in the blockchain. This transparency is what makes crypto unique compared to traditional banking.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.2.title', {
            fallback: 'Coinsdot and Non-Custodial Exchange',
          })}
        >
          <ArticleText>
            {t('content.2.text.0', {
              fallback:
                'At Coinsdot, we work on a non-custodial model. That means we never hold your crypto or fiat funds. We only facilitate the exchange between cryptocurrency and fiat. The coins always move directly from your wallet into the exchange process, with fiat transferred straight to your account — without detours, and without us keeping anything in between.',
            })}
          </ArticleText>
          <ArticleText>
            {t('content.2.text.1', {
              fallback:
                'For you, this means peace of mind: your assets remain under your control, and every transaction can be tracked on the blockchain. Our role is to ensure that converting crypto to fiat, or fiat to crypto, is handled in a compliant and transparent way.',
            })}
          </ArticleText>
        </ArticleSection>
      </ArticleContent>
    </>
  );
};
