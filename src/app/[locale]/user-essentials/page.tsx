import {
  DocumentsCannotAccept,
  Hero,
  HowToExchange,
  ImportantMessage,
  VerificationPackage,
} from './components';

export default function UserEssentialsPage() {
  return (
    <main>
      <Hero />
      <HowToExchange />
      <VerificationPackage />
      <DocumentsCannotAccept />
      <ImportantMessage />
    </main>
  );
}
