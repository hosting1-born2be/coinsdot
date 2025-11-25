import type { Metadata } from 'next';

import { Hero, HowToJoin, OurOffer, WhoCanJoin } from './components';

export const metadata: Metadata = {
  title: 'Partnership | Coinsdot',
  description:
    'Discover how to join the Coinsdot affiliate program and start earning by referring users. Learn about our benefits, requirements, and how it works.',
  openGraph: {
    title: 'Partnership | Coinsdot',
    description:
      'Discover how to join the Coinsdot affiliate program and start earning by referring users. Learn about our benefits, requirements, and how it works.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
  twitter: {
    title: 'Partnership | Coinsdot',
    description:
      'Discover how to join the Coinsdot affiliate program and start earning by referring users. Learn about our benefits, requirements, and how it works.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
};

export default function PartnershipPage() {
  return (
    <main>
      <Hero />
      <OurOffer />
      <WhoCanJoin />
      <HowToJoin />
    </main>
  );
}
