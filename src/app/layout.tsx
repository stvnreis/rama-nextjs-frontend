import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Ramá Business',
  verification: {
    google: 'nl5SDpD6JMyS19n_Qt6M-y8oxACazKeUUuzJnnKsFTc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <main className="h-[100dvh]">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
