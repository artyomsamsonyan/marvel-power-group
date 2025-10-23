import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alata',
});

export const metadata: Metadata = {
  title: "Marvel Power Group",
  description: "Enterprise Strategy, Wholesale Power, Market Development",
  openGraph: {
    title: "Marvel Power Group",
    description: "Enterprise Strategy, Wholesale Power, Market Development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={alata.variable}>
      <body className="font-sofia antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}