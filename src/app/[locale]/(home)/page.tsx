import {
  AssistanceHub,
  ComplianceAndProtection,
  Hero,
  HowGetStarted,
  MeetCoinsdot,
  TrustedBy,
  WhyCoinsdot,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <MeetCoinsdot />
      <HowGetStarted />
      <WhyCoinsdot />
      <TrustedBy />
      <ComplianceAndProtection />
      <AssistanceHub />
      {/* <ContactForm
        heading={t('heading', { fallback: 'Our team is one form away!' })}
      /> */}
    </main>
  );
}
