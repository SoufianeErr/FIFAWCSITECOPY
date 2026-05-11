'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        'service_413p1mp',
        'template_4q9ah4p',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'KxP7Cj5eZXkoxUxQt'
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
      <h1 className="text-4xl font-black text-navy mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question about the FIFA World Cup 2026? Want to suggest a correction or addition to our guides? We&apos;d love to hear from you.
      </p>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h2>
          <p className="text-green-600">Thank you for reaching out. We&apos;ll get back to you within 2 business days.</p>
        </div>
      ) : (
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

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
              Something went wrong. Please try again or contact us directly at soufiane.e.business@gmail.com
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
