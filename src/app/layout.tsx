import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sharjeel Khalid — Web Developer",
  description:
    "Full-stack developer specializing in high-converting websites for coaches and consultants.",
  openGraph: {
    title: "Sharjeel Khalid — Web Developer",
    description:
      "Full-stack developer specializing in high-converting websites for coaches and consultants.",
    url: "https://sharjeelac.me",
    siteName: "Sharjeel Khalid",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body className="font-body text-brand-text bg-brand-bg antialiased">
        <LenisProvider>
          <LoadingScreen />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
