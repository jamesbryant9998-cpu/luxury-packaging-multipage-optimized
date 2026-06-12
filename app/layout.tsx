import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family',
});

import './globals.css';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Luxury Packaging Manufacturer | Custom Gift & Magnetic Boxes | LuxePack Pro',
  description: 'LuxePack Pro is a leading FSC & ISO9001 certified manufacturer of premium custom packaging boxes. Specializing in luxury magnetic boxes, gift boxes, jewelry boxes, and cosmetics packaging for global premium brands.',
  keywords: [
    'luxury packaging manufacturer',
    'custom magnetic boxes',
    'custom gift boxes factory',
    'premium cosmetics packaging',
    'jewelry boxes manufacturer',
    'FSC certified packaging supplier',
    'rigid box supplier China'
  ],
  authors: [{ name: 'LuxePack Pro' }],
  robots: 'index, follow',
  openGraph: {
    title: 'LuxePack Pro | Custom Luxury Packaging Manufacturer',
    description: 'Leading certified factory for premium magnetic gift boxes, jewelry boxes, and bespoke packaging solutions.',
    url: 'https://www.luxepack-pro.com',
    siteName: 'LuxePack Pro',
    images: [
      {
        url: 'https://www.luxepack-pro.com/images/homepage.webp',
        width: 1200,
        height: 630,
        alt: 'Bespoke Rigid Boxes and Premium Custom Packaging Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        
        
        
        
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
