import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import LenisConext from "@/contexts/lenis-context";
import Header from "@/components/ui/Header";
import Footer from "@/components/page/Footer";
import { constructMetaData } from "@/utils/metadata";

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-cod-gray text-demo-smoke overflow-x-hidden">
      <body className={GeistSans.className}>
        <LenisConext>
          <Header />
          {children}
          {/* <Footer /> */}
        </LenisConext>
      </body>
    </html>
  );
}
