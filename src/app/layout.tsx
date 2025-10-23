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
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-between z-5 ">
          <div className=""></div>
          <div className="h-full w-px bg-[#0000000F]"></div>
          <div className="h-full w-px bg-[#0000000F]"></div>
          <div className="h-full w-px bg-[#0000000F]"></div>
          <div className="h-full w-px bg-[#0000000F]"></div>
          <div className="h-full w-px bg-[#0000000F]"></div>
          <div className=""></div>
        </div>
        {children}
      </body>
    </html>
  );
}