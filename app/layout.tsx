import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Footer from '@/app/components/footer/page'
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Ikechukwu | Senior Brand Identity Designer",
  description: 'Portfolio of Ikechukwu Joshua, a Senior Brand Identity Designer based in Lagos, Nigeria specializing in Branding, Packaging, and Flyer design.',
  keywords: ['Ikechukwu Joshua', 'Joshua Joshua', 'Brand Designer Lagos', 'Packaging Design', 'Identity Designer Portfolio'],
  openGraph: {
    title: 'Ikechukwu Joshua | Senior Brand Identity Designer',
    description: 'Specializing in Branding, Packaging, and Flyer design.',
    url: 'https://bit.ly/joshua-ikechukwu',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
