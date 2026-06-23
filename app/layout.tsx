import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { TranslationProvider } from '../components/TranslationContext';

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LuxePack Pro",
              "url": "https://www.luxupackage.com",
              "logo": "https://www.luxupackage.com/images/logo.png",
              "description": "Premium FSC & ISO certified custom packaging manufacturer specializing in magnetic gift boxes and luxury rigid boxes.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "China",
                "contactType": "Sales & Support",
                "areaServed": "Global"
              },
              "hasCertification": ["ISO 9001:2015", "ISO 14001:2015", "FSC-CoC"],
              "offers": {
                "@type": "AggregateOffer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Rigid Box Manufacturing",
                  "description": "Direct factory custom rigid boxes with gold foil, V-groove, and magnetic closure."
                }
              }
            })
          }}
        />
      </head>
      <body>
        <TranslationProvider>
          {children}
          <WhatsAppFloat />
        </TranslationProvider>
      </body>
    </html>
  );
}
