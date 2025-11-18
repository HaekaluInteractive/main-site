'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/artists', label: 'Artists' },
    { href: '/for-studios', label: 'For Studios' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-obsidian/90 border-b border-indigo-light/30">
      <div className="container-base">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-blue-electric rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-fast" />

              {/* Logo mark */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-gold to-gold/80 rounded-lg flex items-center justify-center font-display font-bold text-xl text-obsidian shadow-md">
                H
              </div>
            </div>

            <span className="font-display font-bold text-xl tracking-tight group-hover:text-gold transition-colors duration-fast">
              HAEKA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display font-semibold transition-colors duration-fast hover:text-gold ${
                  isActive(link.href) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.label}

                {/* Active indicator */}
                {isActive(link.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-indigo-light/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display font-semibold py-2 transition-colors duration-fast hover:text-gold ${
                    isActive(link.href) ? 'text-gold' : 'text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
