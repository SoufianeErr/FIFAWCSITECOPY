/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/privacy-policy', '/contact'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://footballworldcupnews.com'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/cities': 0.9,
      '/news': 0.8,
    };
    if (path.startsWith('/cities/')) return { loc: path, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
    if (path.startsWith('/stadiums/')) return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    if (path.startsWith('/news/')) return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
