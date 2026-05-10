import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com';
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/images/cities/logo-favicon.png',
    apple: '/images/cities/logo-favicon.png',
  },
  title: {
    default: 'FIFA World Cup 2026 Scores, Host Cities & Stadiums Guide',
    template: '%s | FIFA World Cup 2026 Guide',
  },
  description:
    'Complete guide to FIFA World Cup 2026 — live scores, results, all 16 host cities and stadiums across the USA, Canada, and Mexico. Match schedules, tickets, travel tips, and hotels.',
  keywords: [
    'FIFA World Cup 2026',
    'World Cup 2026 scores',
    'World Cup 2026 results',
    'World Cup 2026 host cities',
    'World Cup 2026 stadiums',
    'FIFA World Cup USA 2026',
    'World Cup 2026 tickets',
    'World Cup 2026 travel guide',
    'where is FIFA World Cup 2026',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'FIFA World Cup 2026 Guide',
    images: [{ url: `${SITE_URL}/og/default-og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WC2026Guide',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* AdSense script — lazyOnload for performance */}
        {ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <BackToTop />

        {/* Google Analytics — lazyOnload */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
