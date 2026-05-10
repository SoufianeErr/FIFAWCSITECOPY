'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/scores', label: 'Scores' },
  { href: '/cities', label: 'Cities' },
  { href: '/stadiums/metlife-stadium', label: 'Stadiums' },
  { href: '/news', label: 'News' },
  { href: '/news?category=Travel+Tips', label: 'Travel Tips' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy'
      }`}
    >
      {/* Leaderboard ad slot below header on desktop */}
      {/* 
       <div className="hidden lg:flex justify-center bg-navy/50 py-1" aria-hidden="true">
        <div
          className="bg-gray-800/50 text-gray-500 text-xs flex items-center justify-center rounded"
          style={{ width: 728, height: 90 }}
        >
          Advertisement · 728×90
        </div>
      </div>  
      */}
      

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/cities/logo.png"
              alt="FIFA World Cup 2026 Guide Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-white font-black text-sm leading-tight">FIFA World Cup</div>
              <div className="text-gold text-xs font-semibold">2026 Host Cities Guide</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cities"
              className="ml-2 bg-gold text-navy px-5 py-2 rounded-full text-sm font-bold hover:bg-gold-light transition-colors"
            >
              All 16 Cities
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cities"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-gold text-navy px-5 py-3 rounded-full text-sm font-bold hover:bg-gold-light transition-colors mt-3"
            >
              All 16 Host Cities
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
