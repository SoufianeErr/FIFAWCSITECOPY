'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

const CONTACT_EMAIL = 'soufiane.e.business@gmail.com';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
      <h1 className="text-4xl font-black text-navy mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question about the FIFA World Cup 2026? Want to suggest a correction or addition to our guides? We&apos;d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            placeholder="e.g., Question about New York World Cup guide"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors"
        >
          Send Message
        </button>

        <p className="text-xs text-gray-400 text-center">
          Clicking &quot;Send Message&quot; will open your email client with the message pre-filled.
        </p>
      </form>
    </div>
  );
}
