import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy — FIFA World Cup 2026 Guide',
  description: 'Privacy policy for the FIFA World Cup 2026 Host Cities & Stadiums Guide. Information about data collection, cookies, advertising, and your rights.',
  path: '/privacy-policy',
  noIndex: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fifaworldcup2026guide.com';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <h1 className="text-4xl font-black text-navy mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: January 1, 2026</p>

      <div className="prose prose-lg max-w-none">
        <p>
          This Privacy Policy describes how FIFA World Cup 2026 Guide ("we", "us", or "our") collects, uses, and protects your information when you visit {SITE_URL} (the "Site").
        </p>

        <h2>1. Information We Collect</h2>
        <h3>Automatically Collected Information</h3>
        <p>When you visit our Site, we automatically collect certain information from your browser, including:</p>
        <ul>
          <li>IP address (anonymized)</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent</li>
          <li>Referring website</li>
          <li>Device type (desktop, mobile, tablet)</li>
        </ul>

        <h3>Contact Form Information</h3>
        <p>If you submit our contact form, we collect your name, email address, and message content to respond to your inquiry. This information is processed through EmailJS and not stored on our servers.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Improve site content and user experience</li>
          <li>Analyze traffic and popular content</li>
          <li>Respond to contact form submissions</li>
          <li>Display relevant advertising (see Advertising section below)</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Analytics cookies:</strong> Google Analytics cookies to understand site traffic and user behavior. These are anonymized and do not personally identify you.</li>
          <li><strong>Advertising cookies:</strong> Google AdSense uses cookies to serve personalized advertisements. You can opt out through Google's Ads Settings.</li>
          <li><strong>Functional cookies:</strong> Used to remember your preferences (such as cookie consent).</li>
        </ul>

        <h2>4. Google AdSense & Advertising</h2>
        <p>
          This site uses Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google's Ad Settings</a>.
        </p>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to websites. Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
        </p>

        <h2>5. Affiliate Links</h2>
        <p>
          Some links on this site, particularly hotel recommendations, may be affiliate links. If you click these links and make a booking, we may receive a commission at no additional cost to you. Affiliate relationships do not influence our editorial recommendations.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>We use the following third-party services that have their own privacy policies:</p>
        <ul>
          <li><strong>Google Analytics</strong> — Web analytics (opt out at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>)</li>
          <li><strong>Google AdSense</strong> — Advertising platform</li>
          <li><strong>EmailJS</strong> — Contact form processing</li>
          <li><strong>OpenStreetMap</strong> — Interactive maps (no personal data collected)</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          Our site is not directed at children under 13 years of age, and we do not knowingly collect personal information from children under 13.
        </p>

        <h2>8. Data Retention</h2>
        <p>
          Analytics data is retained for 26 months. Contact form submissions are retained only as long as necessary to respond to your inquiry.
        </p>

        <h2>9. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request data portability</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p>To exercise these rights, please contact us through our <a href="/contact">contact page</a>.</p>

        <h2>10. GDPR (European Users)</h2>
        <p>
          If you are located in the European Economic Area (EEA), we process your data under the legitimate interests legal basis for analytics and advertising. You have the right to object to this processing by contacting us.
        </p>

        <h2>11. CCPA (California Residents)</h2>
        <p>
          California residents have specific rights under the California Consumer Privacy Act (CCPA). We do not sell personal information. You have the right to know what information we collect, to delete your personal information, and to opt-out of the sale of personal information (which we do not engage in).
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of our site after any changes constitutes acceptance of the new policy.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.
        </p>
      </div>
    </div>
  );
}
