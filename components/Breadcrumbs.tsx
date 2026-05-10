import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com';

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = breadcrumbSchema(
    [{ name: 'Home', url: SITE_URL }, ...items.slice(0, -1).map((i) => ({ name: i.name, url: `${SITE_URL}${i.href}` })), { name: items[items.length - 1].name, url: `${SITE_URL}${items[items.length - 1].href}` }]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {index === items.length - 1 ? (
              <span className="text-navy font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-gold transition-colors">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
