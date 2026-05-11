import type { Metadata } from 'next';
import { City } from './cities';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com';
const SITE_NAME = 'FIFA World Cup 2026 Guide';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default-og.jpg`;

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@WC2026Guide',
    },
  };
}

export function buildCityMetadata(city: City): Metadata {
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/cities/${city.slug}`,
    ogImage: `${SITE_URL}/og/cities/${city.slug}.jpg`,
  });
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/WC2026Guide',
      'https://facebook.com/WC2026Guide',
    ],
    description: 'The complete guide to FIFA World Cup 2026 host cities, stadiums, tickets, and travel information.',
  };
}

export function sportsEventSchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `FIFA World Cup 2026 — ${city.fullName}`,
    description: `FIFA World Cup 2026 matches in ${city.fullName} at ${city.stadium}. ${city.matchCount} matches hosted with a capacity of ${city.capacity.toLocaleString('en-US')} fans.`,
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    image: `${SITE_URL}/images/cities/${city.slug}.jpg`,
    location: {
      '@type': 'StadiumOrArena',
      name: city.stadium,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressCountry: city.country === 'USA' ? 'US' : city.country === 'Canada' ? 'CA' : 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'FIFA',
      url: 'https://www.fifa.com',
    },
    performer: {
      '@type': 'SportsOrganization',
      name: 'FIFA World Cup 2026 Teams',
      sport: 'Association Football',
    },
    offers: {
      '@type': 'Offer',
      name: 'FIFA World Cup 2026 Tickets',
      url: 'https://www.fifa.com/tickets',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
    sport: 'Association Football',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url}`,
    },
  };
}
