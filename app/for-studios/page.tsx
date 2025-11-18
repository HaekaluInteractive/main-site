import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import ServicesGrid from '../../components/studios/ServicesGrid';
import CaseStudyBlock from '../../components/studios/CaseStudyBlock';
import SubmissionProcess from '../../components/studios/SubmissionProcess';
import SubmissionForm from '../../components/studios/SubmissionForm';
import GridPattern from '../../components/patterns/GridPattern';

export const metadata: Metadata = {
  title: 'For Studios',
  description: 'Partner with Haekalu Interactive to publish your indie game with world-class music, press access, and global reach.',
};

export default function ForStudios() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <GridPattern opacity={0.03} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-dark via-obsidian to-obsidian" />

        {/* Content */}
        <div className="container-base relative z-10 py-24">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="inline-block mb-6">
              <span className="text-sm font-display font-bold text-blue-electric uppercase tracking-wider px-4 py-2 bg-blue-electric/10 border border-blue-electric/30 rounded-full">
                Publishing Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-balance mb-6">
              Let's Publish Your{' '}
              <span className="text-gradient">Game</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              We partner with indie studios to amplify their games through world-class music licensing,
              strategic press access, and cross-media storytelling.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="space-y-1">
                <div className="font-display font-bold text-3xl md:text-4xl text-gold">500K+</div>
                <div className="text-sm text-slate-tech">Combined Downloads</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-bold text-3xl md:text-4xl text-gold">15+</div>
                <div className="text-sm text-slate-tech">Featured Artists</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-bold text-3xl md:text-4xl text-gold">10+</div>
                <div className="text-sm text-slate-tech">Press Features</div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-bold text-3xl md:text-4xl text-gold">100%</div>
                <div className="text-sm text-slate-tech">African-Rooted</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link href="#submit">
                <Button variant="primary" size="xl" className="shadow-glow-gold">
                  Submit Your Game
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="secondary" size="xl">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24">
        <div className="container-base">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              End-to-end publishing services designed for ambitious indie studios
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 rounded-full" />
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-indigo/10 to-transparent">
        <div className="container-base">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Real results from studios we've partnered with
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 rounded-full" />
          </div>

          <CaseStudyBlock />
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24">
        <div className="container-base">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our streamlined process from submission to launch
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 rounded-full" />
          </div>

          <SubmissionProcess />
        </div>
      </section>

      {/* Submission Form Section */}
      <section id="submit" className="relative py-24 bg-gradient-to-b from-indigo-dark/30 via-obsidian to-obsidian">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                Ready to <span className="text-gradient">Start</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Submit your game and we'll get back to you within 2 weeks
              </p>
            </div>

            <SubmissionForm />
          </div>
        </div>
      </section>
    </div>
  );
}
