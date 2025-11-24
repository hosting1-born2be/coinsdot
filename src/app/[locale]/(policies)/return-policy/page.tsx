import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicyHero } from '@/features/policies/ui/policy-hero';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

export const metadata: Metadata = {
  title: 'Return Policy | Coinsdot',
  openGraph: {
    title: 'Return Policy | Coinsdot',
  },
  twitter: {
    title: 'Return Policy | Coinsdot',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ReturnPolicyPage() {
  const t = await getTranslations('returnAndCancellationPolicy');

  return (
    <>
      <PolicyHero
        title={t('title', { fallback: 'Terms and Conditions' })}
        lastUpdated={t('lastUpdated', {
          fallback: 'Last updated on September 9th, 2025',
        })}
      />
      <PolicyRender
        navigation={[
          { label: t('0.title', { fallback: '1. Refunds' }), href: '#refunds' },
          {
            label: t('1.title', {
              fallback: '2. Order Cancellations (Buying/Selling)',
            }),
            href: '#orderCancellations',
          },
        ]}
        sticky
      >
        <PolicySectionLayout
          titleId="refunds"
          title={t('0.title', { fallback: '1. Refunds' })}
        >
          <PolicyText>
            1.1 {t('0.0.title', { fallback: 'No Refunds' })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>1.1.1</span>
            {t('0.0.0', {
              fallback:
                'All order execution operations, including sales and purchases of Crypto-assets via the Website, are final and non-refundable.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>1.1.2</span>
            {t('0.0.1', {
              fallback:
                'Coinsmax does not accept returns and will not provide refunds unless explicitly stated otherwise in our Terms of Use. Transactions involving Crypto-assets are conducted on a public blockchain and are therefore irreversible.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>1.1.3</span>
            {t('0.0.2', {
              fallback:
                'You are solely responsible for ensuring the accuracy of transaction details, including wallet addresses. Coinsmax shall not be liable for any loss due to user error or incorrect transaction data.',
            })}
          </PolicyText>
        </PolicySectionLayout>
        <PolicySectionLayout
          titleId="orderCancellations"
          title={t('1.title', {
            fallback: '2. Order Cancellations (Buying/Selling)',
          })}
        >
          <PolicyText>
            2.1 {t('1.0.title', { fallback: 'Cancellation of Orders' })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>2.1.1</span>
            {t('1.0.0', {
              fallback:
                'You may cancel an order placed through the transaction order form only if the cancellation request is received before Coinsmax begins execution of the order.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>2.1.2</span>
            {t('1.0.1', {
              fallback:
                'Once Coinsmax has executed your order, you may not amend or cancel your authorization to complete the transaction.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>2.1.3</span>
            {t('1.0.2', {
              fallback:
                'If your order has been partially filled, you may cancel the unfilled portion.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>2.1.4</span>
            {t('1.0.3', {
              fallback:
                'If an order cannot be executed due to insufficient payment of funds, Coinsmax reserves the right to cancel the entire order.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>2.1.5</span>
            {t('1.0.4', {
              fallback:
                'Coinsmax shall not be held liable for delays or failed order execution caused by network congestion, third-party provider issues, force majeure events, or unforeseen technical failures beyond its control.',
            })}
          </PolicyText>
          <PolicyText className="pl-6" flex>
            <span>2.1.6</span>
            {t('1.0.5', {
              fallback:
                'Coinsmax reserves the right to withhold, cancel, delay or refuse to execute any order if required to comply with AML, KYC, or other regulatory obligations.',
            })}
          </PolicyText>
        </PolicySectionLayout>
      </PolicyRender>
    </>
  );
}
