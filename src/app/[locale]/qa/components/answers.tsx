'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Answers = () => {
  const t = useTranslations('qa.answers');

  return (
    <section className="container rounded-3xl bg-[#120A34] p-2">
      <div className="flex flex-col">
        <QuestionAndAnswer
          heading={t('0.title', { fallback: 'How to Pay' })}
          items={[
            {
              question: t('0.items.0.question', {
                fallback: 'Can I use a credit card to acquire crypto?',
              }),
              answer: t('0.items.0.answer', {
                fallback:
                  'Yes. Coinsdot allows the purchase of Bitcoin or Ethereum with a credit card.',
              }),
            },
            {
              question: t('0.items.1.question', {
                fallback: 'Can I make an exchange via bank transfer?',
              }),
              answer: t('0.items.1.answer', {
                fallback:
                  'Yes. Coinsdot supports exchanging Bitcoin or Ethereum using a bank transfer.',
              }),
            },
          ]}
        />
        <QuestionAndAnswer
          heading={t('1.title', { fallback: 'Cryptocurrencies' })}
          items={[
            {
              question: t('1.items.0.question', {
                fallback:
                  'Which digital currencies can I exchange on Coinsdot?',
              }),
              answer: t('1.items.0.answer', {
                fallback:
                  'At the moment, Coinsdot supports only Bitcoin (BTC) and Ethereum (ETH).',
              }),
            },
          ]}
        />
        <QuestionAndAnswer
          heading={t('2.title', { fallback: 'Wallets & Transactions' })}
          items={[
            {
              question: t('2.items.0.question', {
                fallback: 'Do I need a crypto wallet to use Coinsdot?',
              }),
              answer: t('2.items.0.answer', {
                fallback:
                  'Yes, you’ll need your own wallet to send Bitcoin or Ethereum. Coinsdot doesn’t create or store wallets for you — we simply process your exchange transactions.',
              }),
            },
            {
              question: t('2.items.1.question', {
                fallback:
                  'How can I confirm that my crypto payment has gone through?',
              }),
              answer: t('2.items.1.answer', {
                fallback:
                  'Every transaction you make is recorded on the blockchain. By entering your wallet address or transaction ID into a public blockchain explorer (for example, blockchain.com), you can see when your payment was sent, verified, and received.',
              }),
            },
          ]}
        />
        <QuestionAndAnswer
          heading={t('3.title', { fallback: 'Exchange Rates and Conversions' })}
          items={[
            {
              question: t('3.items.0.question', {
                fallback: 'Can I exchange Bitcoin or Ethereum for fiat?',
              }),
              answer: t('3.items.0.answer', {
                fallback:
                  'Yes. Coinsdot processes exchanges directly between your wallet and the recipient, allowing you to receive fiat when exchanging Bitcoin or Ethereum.',
              }),
            },
            {
              question: t('3.items.1.question', {
                fallback:
                  'How is the exchange rate calculated when I exchange crypto?',
              }),
              answer: t('3.items.1.answer', {
                fallback:
                  'Coinsdot uses real-time market data from leading liquidity providers to ensure your crypto payment is converted at a fair and accurate rate.',
              }),
            },
            {
              question: t('3.items.2.question', {
                fallback: 'At what moment is the exchange rate fixed?',
              }),
              answer: t('3.items.2.answer', {
                fallback:
                  'The rate is locked in at the time your payment is received and confirmed on the blockchain, ensuring transparency and consistency for every transaction.',
              }),
            },
          ]}
        />
        <QuestionAndAnswer
          heading={t('4.title', {
            fallback: 'Payment Processing and Verification',
          })}
          items={[
            {
              question: t('4.items.0.question', {
                fallback: 'When will the cryptocurrency arrive in my wallet?',
              }),
              answer: t('4.items.0.answer', {
                fallback:
                  'The transaction will be processed once your transaction is confirmed on the blockchain and your KYC verification (if required) is completed. After that, Coinsdot instantly processes',
              }),
            },
            {
              question: t('4.items.1.question', {
                fallback: 'Can I use Coinsdot without verifying my identity?',
              }),
              answer: t('4.items.1.answer', {
                fallback:
                  'No. To comply with international regulations, all users must complete KYC before making payments. This helps protect your transactions and ensures that invoices are paid securely and without delays.',
              }),
            },
          ]}
        />
        <QuestionAndAnswer
          heading={t('5.title', { fallback: 'KYC and Your Data' })}
          items={[
            {
              question: t('5.items.0.question', {
                fallback: 'Why do I need to complete KYC with Coinsdot?',
              }),
              answer: t('5.items.0.answer', {
                fallback:
                  'Know Your Customer is a legal requirement for financial services, including crypto payments. At Coinsdot, we require KYC from all users to ensure compliance with regulations and to ensure secure and transparent exchange.',
              }),
            },
            {
              question: t('5.items.1.question', {
                fallback:
                  'What is the purpose of submitting my personal details and verification documents?',
              }),
              answer: t('5.items.1.answer', {
                fallback:
                  'Verification protects both you and the payment process. By confirming your identity, we prevent fraud, money laundering, and misuse of digital assets, while ensuring your transactions are processed smoothly and accepted by all parties.',
              }),
            },
            {
              question: t('5.items.2.question', {
                fallback: 'Does Coinsdot store my payment or wallet details?',
              }),
              answer: t('5.items.2.answer', {
                fallback:
                  'No. Coinsdot operates on a non-custodial model. We do not store your credit card, wallet private keys, or funds. Your assets remain under your control, and every payment moves directly from your wallet to the recipient.',
              }),
            },
          ]}
        />
        <QuestionAndAnswer
          heading={t('6.title', { fallback: 'Payments and Customer Support' })}
          items={[
            {
              question: t('6.items.0.question', {
                fallback:
                  'How long does it take for Bitcoin or Ethereum to be sent to my wallet?',
              }),
              answer: t('6.items.0.answer', {
                fallback:
                  'Coinsdot processes exchange requests after completing KYC verification. Typically, the transaction is completed within several business days once all details have been confirmed.',
              }),
            },
            {
              question: t('6.items.1.question', {
                fallback: 'Can I cancel a payment after sending it?',
              }),
              answer: t('6.items.1.answer', {
                fallback:
                  'Once a crypto transaction has been confirmed on the blockchain, it cannot be reversed or cancelled. If you notice an issue before the payment is processed, please contact our support team immediately for assistance.',
              }),
            },
            {
              question: t('6.items.2.question', {
                fallback: 'When is the Coinsdot support team available?',
              }),
              answer: t('6.items.2.answer', {
                fallback:
                  'Our support team is here to help you Monday–Friday, from 06:00 to 22:00 GMT / 01:00 to 17:00 EST. You can reach us anytime during these hours for guidance on payments, verification, or account assistance.',
              }),
            },
          ]}
        />
      </div>
      <div className="relative h-[400px] overflow-hidden rounded-3xl">
        <Image
          className="object-cover"
          src="/images/qa/btc.jpg"
          alt="answers"
          fill
          unoptimized
        />
      </div>
    </section>
  );
};

const QuestionAndAnswer = ({
  heading,
  items,
}: {
  heading: string;
  items: { question: string; answer: string }[];
}) => {
  return (
    <article className="flex gap-[64px] border-b border-white/15 p-6 last:border-b-0 max-lg:flex-col max-lg:gap-8">
      <Title
        as="h3"
        weight={600}
        className="w-[400px] shrink-0 text-[40px] leading-[120%] tracking-[-0.8px] max-lg:w-full max-md:text-[36px]"
      >
        {heading}
      </Title>
      <ul className="flex flex-col gap-9">
        {items.map(({ question, answer }) => (
          <li key={question} className="flex flex-col gap-1.5">
            <Title
              weight={600}
              className="text-[24px] leading-[130%] tracking-[-0.48px] max-md:text-[18px]"
            >
              {question}
            </Title>
            <Text size="lg" className="max-md:text-sm">
              {answer}
            </Text>
          </li>
        ))}
      </ul>
    </article>
  );
};
