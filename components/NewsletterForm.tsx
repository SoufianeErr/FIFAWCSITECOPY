'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID || '',
        { email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-navy font-semibold text-lg">
        ✅ You&apos;re subscribed! We&apos;ll keep you updated.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 px-5 py-3 rounded-full text-navy font-medium focus:outline-none focus:ring-2 focus:ring-navy/30"
        required
        disabled={status === 'sending'}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-navy text-white font-bold px-8 py-3 rounded-full hover:bg-blue-900 transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === 'sending' ? 'Subscribing…' : 'Subscribe Free'}
      </button>
      {status === 'error' && (
        <p className="text-red-700 text-sm mt-1 sm:col-span-2">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
