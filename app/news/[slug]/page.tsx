import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { buildMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import SocialShare from '@/components/SocialShare';
import Link from 'next/link';
import Image from 'next/image';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com';

const contentDir = path.join(process.cwd(), 'content', 'news');

function getArticle(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...data, slug, content } as {
    title: string;
    description: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
    image?: string;
    slug: string;
    content: string;
  };
}

export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace('.mdx', '') }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/news/${article.slug}`,
    ogImage: article.image,
  });
}

const categoryColors: Record<string, string> = {
  Cities: 'bg-blue-100 text-blue-700',
  Stadiums: 'bg-purple-100 text-purple-700',
  'Travel Tips': 'bg-green-100 text-green-700',
  Tickets: 'bg-orange-100 text-orange-700',
  'Fan Guides': 'bg-pink-100 text-pink-700',
  'Teams': 'bg-red-100 text-red-700',
};

const relatedArticles = [
  { slug: 'best-host-cities-2026', title: 'Best Host Cities to Visit' },
  { slug: 'how-to-get-tickets', title: 'How to Get Tickets' },
  { slug: 'biggest-stadiums-ranked', title: 'Biggest Stadiums Ranked' },
  { slug: 'travel-guide-usa', title: 'USA Travel Guide' },
  { slug: 'mexico-city-vs-los-angeles', title: 'Mexico City vs Los Angeles' },
  { slug: 'world-cup-2026-fan-fest-locations', title: 'Fan Fest Locations' },
  { slug: 'how-to-watch-world-cup-2026', title: 'How to Watch World Cup 2026' },
  { slug: 'players-missing-world-cup-2026', title: 'Legends Missing World Cup 2026' },
  { slug: 'players-injured-world-cup-2026', title: 'Stars Injured for World Cup 2026' },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const schema = articleSchema({
    title: article.title,
    description: article.description,
    url: `/news/${article.slug}`,
    image: article.image || `${SITE_URL}/og/news/${article.slug}.jpg`,
    datePublished: article.date,
    author: article.author,
  });
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'News', url: `${SITE_URL}/news` },
    { name: article.title, url: `${SITE_URL}/news/${article.slug}` },
  ]);

  const related = relatedArticles.filter((a) => a.slug !== params.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article */}
          <article className="lg:col-span-3">
            <Breadcrumbs
              items={[
                { name: 'News', href: '/news' },
                { name: article.title, href: `/news/${article.slug}` },
              ]}
            />

            <div className="mb-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-200">
              <span>By {article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>

            {article.image && (
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
            )}

            <SocialShare title={article.title} />

            <AdSlot format="leaderboard" className="my-6" />

            <div className="prose prose-lg max-w-none prose-headings:text-navy prose-a:text-gold">
              <MDXRemote
                source={article.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>

            <AdSlot format="end-of-content" className="mt-8" />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <SocialShare title={article.title} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <AdSlot format="sidebar" />

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-4">Related Articles</h3>
                <div className="space-y-3">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/news/${a.slug}`}
                      className="block text-sm text-gray-600 hover:text-gold transition-colors"
                    >
                      → {a.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-navy text-white rounded-2xl p-6">
                <h3 className="font-bold text-gold mb-3">Top Cities</h3>
                <div className="space-y-2 text-sm">
                  {['new-york-new-jersey', 'los-angeles', 'miami', 'dallas', 'mexico-city'].map((slug) => (
                    <Link
                      key={slug}
                      href={`/cities/${slug}`}
                      className="block text-gray-300 hover:text-gold transition-colors"
                    >
                      → {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Link>
                  ))}
                  <Link href="/cities" className="block text-gold hover:underline mt-2">
                    All 16 cities →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles row */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-navy mb-6">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <h3 className="font-bold text-navy group-hover:text-gold transition-colors">{a.title}</h3>
                <span className="text-gold text-sm mt-2 inline-block group-hover:underline">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AdSlot format="sticky-footer" />
    </>
  );
}
