import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cole's Detailing | Mobile Car Detailing Oakland, Wayne & Macomb",
  description: "Professional mobile car detailing. We come to you. Ceramic coating, interior deep clean, stain removal. Serving Oakland, Wayne, and Macomb County.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
