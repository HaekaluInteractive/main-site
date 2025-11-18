import Link from 'next/link';
import Button from '../ui/Button';

export default function FeaturedArtist() {
  return (
    <section className="relative py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-crimson/5 via-transparent to-transparent rounded-3xl" />

      <div className="relative grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Left: Portrait */}
        <div className="lg:col-span-2 relative group">
          {/* Golden accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent" />

          {/* Image Container */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ml-4 shadow-2xl">
            {/* High-contrast placeholder with warm lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-crimson/30 via-indigo to-obsidian flex items-center justify-center">
              <div className="text-center space-y-4 opacity-30">
                <img src="Lord-Spikeheart.jpg" alt="Portrait of Lil Spike" />
              </div>
            </div>

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

            {/* Border accent */}
            <div className="absolute inset-0 border border-gold/20 rounded-2xl" />
          </div>

          {/* Quote callout */}
          <div className="absolute -right-4 bottom-8 bg-indigo/95 backdrop-blur-sm border border-gold/30 px-4 py-3 rounded-xl shadow-glow-gold max-w-xs">
            <p className="text-xs font-display font-semibold text-gold">
              "Music used in highly acclaimed AAA titles."
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Artist Name */}
          <div>
            <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-4">
              Lord Spikeheart
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-display font-medium text-gray-100">
              "Praised for dark experimental futurism."
            </p>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Featured in <span className="text-gold font-semibold">The Guardian</span>,{' '}
              <span className="text-gold font-semibold">Metal Hammer</span>, and{' '}
              <span className="text-gold font-semibold">The Wire</span>. Music used in Cyberpunk 2077.
            </p>
          </div>

          {/* Press Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center px-4 py-2 bg-indigo/50 border border-gold/30 rounded-full text-sm font-display font-semibold text-gold">
              The Guardian
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-indigo/50 border border-gold/30 rounded-full text-sm font-display font-semibold text-gold">
              Metal Hammer
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-indigo/50 border border-gold/30 rounded-full text-sm font-display font-semibold text-gold">
              The Wire
            </span>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link href="/artists">
              <Button variant="primary" size="lg" className="shadow-glow-gold">
                See how we amplify artists for your game
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
