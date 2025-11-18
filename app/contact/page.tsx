'use client';

import type { Metadata } from 'next';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import GridPattern from '../../components/patterns/GridPattern';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  href: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  inquiry: string;
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const contactMethods: ContactMethod[] = [
    {
      icon: '✉️',
      title: 'General Inquiries',
      description: 'Questions about our services or partnerships',
      action: 'hello@haekalu.com',
      href: 'mailto:hello@haekalu.com',
    },
    {
      icon: '🎮',
      title: 'Game Studios',
      description: 'Publishing and collaboration opportunities',
      action: 'studios@haekalu.com',
      href: 'mailto:studios@haekalu.com',
    },
    {
      icon: '🎵',
      title: 'Artists',
      description: 'Music licensing and collaboration',
      action: 'artists@haekalu.com',
      href: 'mailto:artists@haekalu.com',
    },
    {
      icon: '📰',
      title: 'Press & Media',
      description: 'Media inquiries and press kit requests',
      action: 'press@haekalu.com',
      href: 'mailto:press@haekalu.com',
    },
  ];

  const socialLinks = [
    { platform: 'Twitter', handle: '@haekaluinteractive', href: 'https://twitter.com/haekaluinteractive', icon: '𝕏' },
    { platform: 'Instagram', handle: '@haekaluinteractive', href: 'https://instagram.com/haekaluinteractive', icon: 'IG' },
    { platform: 'LinkedIn', handle: 'Haekalu Interactive', href: 'https://linkedin.com/company/haekalu', icon: 'in' },
    { platform: 'Discord', handle: 'Join our community', href: 'https://discord.gg/haekalu', icon: '💬' },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      inquiry: formData.get('inquiry') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setStatus('success');
        setMessage('Thanks for reaching out! We\'ll get back to you within 24-48 hours.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try emailing us directly.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Connection error. Please check your internet and try again.');
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <GridPattern opacity={0.03} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-dark via-obsidian to-obsidian" />

        {/* Content */}
        <div className="container-base relative z-10 py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="inline-block mb-6">
              <span className="text-sm font-display font-bold text-blue-electric uppercase tracking-wider px-4 py-2 bg-blue-electric/10 border border-blue-electric/30 rounded-full">
                Get In Touch
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-balance mb-6">
              Let's Create{' '}
              <span className="text-gradient">Together</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you're a studio, artist, or press outlet, we'd love to hear from you.
              Reach out and let's build something extraordinary.
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
      </section>

      {/* Contact Methods */}
      <section className="relative py-24">
        <div className="container-base">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Choose Your <span className="text-gradient">Channel</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select the best way to reach our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="group relative bg-indigo/50 rounded-2xl overflow-hidden border border-indigo-light/30 transition-all duration-normal hover:border-gold/50 hover:-translate-y-2 hover:shadow-glow p-6 text-center"
              >
                {/* Icon */}
                <div className="text-4xl mb-3 transition-transform duration-normal group-hover:scale-110">
                  {method.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-gray-100 mb-2 group-hover:text-gold transition-colors duration-fast">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4">
                  {method.description}
                </p>

                {/* Email */}
                <div className="text-sm font-display font-semibold text-gold">
                  {method.action}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-indigo/10 to-transparent">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-lg text-gray-300">
                Fill out the form below and we'll get back to you within 24-48 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-display font-semibold text-gray-100">
                    Your Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-display font-semibold text-gray-100">
                    Email Address <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-display font-semibold text-gray-100">
                    Company / Studio
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
                    placeholder="Your Studio"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="inquiry" className="block text-sm font-display font-semibold text-gray-100">
                    Inquiry Type <span className="text-crimson">*</span>
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
                  >
                    <option value="">Select type</option>
                    <option value="publishing">Game Publishing</option>
                    <option value="artist">Artist Collaboration</option>
                    <option value="press">Press / Media</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-display font-semibold text-gray-100">
                  Subject <span className="text-crimson">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
                  placeholder="What would you like to discuss?"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-display font-semibold text-gray-100">
                  Message <span className="text-crimson">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <p className="text-sm text-green-400 font-display font-semibold">
                    ✓ {message}
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-crimson/10 border border-crimson/30 rounded-xl">
                  <p className="text-sm text-crimson font-display font-semibold">
                    ✕ {message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  isLoading={status === 'loading'}
                  className="w-full shadow-glow-gold"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our{' '}
                <a href="/privacy" className="text-gold hover:underline">
                  privacy policy
                </a>
                . We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Social & Community */}
      <section className="relative py-24">
        <div className="container-base">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                Join the <span className="text-gradient">Community</span>
              </h2>
              <p className="text-lg text-gray-300">
                Follow us on social media and stay updated on our latest projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-indigo/50 rounded-2xl overflow-hidden border border-indigo-light/30 transition-all duration-normal hover:border-gold/50 hover:-translate-y-2 hover:shadow-glow p-6 text-center"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-indigo border border-indigo-light/50 flex items-center justify-center text-2xl font-display font-bold text-gray-300 group-hover:text-gold group-hover:border-gold/50 transition-all duration-fast">
                    {social.icon}
                  </div>

                  {/* Platform */}
                  <h3 className="font-display font-bold text-lg text-gray-100 mb-1 group-hover:text-gold transition-colors duration-fast">
                    {social.platform}
                  </h3>

                  {/* Handle */}
                  <p className="text-sm text-gray-300">
                    {social.handle}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-gold font-display font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-fast">
                    Follow
                    <span className="text-lg">→</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Response Time Note */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-indigo/50 border border-indigo-light/30 rounded-xl px-6 py-4">
                <p className="text-gray-300">
                  <span className="font-display font-semibold text-gold">Average response time:</span>{' '}
                  24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
