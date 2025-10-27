import "./globals.css";
import Header from "@/components/Header";
import { alata, sofiaProLight, sofiaProNormal, sofiaProSemiBold, sofiaProBold } from "./fonts";

export const metadata = {
  title: "Marvel Power Group",
  description: "Enterprise Strategy, Wholesale Power, Market Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${alata.variable} ${sofiaProLight.variable} ${sofiaProSemiBold.variable} ${sofiaProBold.variable} ${sofiaProNormal.variable}`}
    >
      <body className="antialiased">
        <Header />
        <div className="hidden md:flex fixed top-0 left-0 right-0 bottom-0 justify-between z-10">
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
