import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import TanstackProvider from '../components/providers/tanstack-provider';
import { ThemeProvider } from '../components/providers/theme-provider';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Ramá Business',
  // description: 'Ramá Business',
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
        <TanstackProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
