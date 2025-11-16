import { Manrope } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.variable, 'antialiased')}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
