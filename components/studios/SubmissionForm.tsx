'use client';

import { useState, FormEvent } from 'react';
import Button from '../ui/Button';

interface FormData {
  studio: string;
  email: string;
  website: string;
  demo: string;
  description: string;
  platform: string;
  stage: string;
}

export default function SubmissionForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      studio: formData.get('studio') as string,
      email: formData.get('email') as string,
      website: formData.get('website') as string,
      demo: formData.get('demo') as string,
      description: formData.get('description') as string,
      platform: formData.get('platform') as string,
      stage: formData.get('stage') as string,
    };

    try {
      const res = await fetch('/api/submit-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setStatus('success');
        setMessage('Thanks for submitting! We\'ll review your game and get back to you within 2 weeks.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Connection error. Please check your internet and try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Studio Information */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Studio Name */}
          <div className="space-y-2">
            <label htmlFor="studio" className="block text-sm font-display font-semibold text-gray-100">
              Studio Name <span className="text-crimson">*</span>
            </label>
            <input
              type="text"
              id="studio"
              name="studio"
              required
              className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
              placeholder="Your Studio Name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-display font-semibold text-gray-100">
              Contact Email <span className="text-crimson">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
              placeholder="contact@yourstudio.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Website */}
          <div className="space-y-2">
            <label htmlFor="website" className="block text-sm font-display font-semibold text-gray-100">
              Website / Portfolio
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
              placeholder="https://yourstudio.com"
            />
          </div>

          {/* Demo Link */}
          <div className="space-y-2">
            <label htmlFor="demo" className="block text-sm font-display font-semibold text-gray-100">
              Demo Link <span className="text-crimson">*</span>
            </label>
            <input
              type="url"
              id="demo"
              name="demo"
              required
              className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
              placeholder="https://drive.google.com/..."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Platform */}
          <div className="space-y-2">
            <label htmlFor="platform" className="block text-sm font-display font-semibold text-gray-100">
              Target Platform <span className="text-crimson">*</span>
            </label>
            <select
              id="platform"
              name="platform"
              required
              className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
            >
              <option value="">Select platform</option>
              <option value="pc">PC (Steam/Epic/GOG)</option>
              <option value="console">Console (PS/Xbox/Switch)</option>
              <option value="mobile">Mobile (iOS/Android)</option>
              <option value="multi">Multi-platform</option>
            </select>
          </div>

          {/* Development Stage */}
          <div className="space-y-2">
            <label htmlFor="stage" className="block text-sm font-display font-semibold text-gray-100">
              Development Stage <span className="text-crimson">*</span>
            </label>
            <select
              id="stage"
              name="stage"
              required
              className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast"
            >
              <option value="">Select stage</option>
              <option value="prototype">Prototype</option>
              <option value="alpha">Alpha</option>
              <option value="beta">Beta</option>
              <option value="complete">Complete</option>
            </select>
          </div>
        </div>

        {/* Game Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-display font-semibold text-gray-100">
            Game Description <span className="text-crimson">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={6}
            className="w-full px-4 py-3 bg-indigo/50 border border-indigo-light/30 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-fast resize-none"
            placeholder="Tell us about your game: genre, key features, target audience, what makes it unique..."
          />
          <p className="text-xs text-gray-400">
            Include: genre, key features, target audience, unique selling points
          </p>
        </div>
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
          {status === 'loading' ? 'Submitting...' : 'Submit Your Game'}
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
  );
}
