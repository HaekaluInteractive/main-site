import Link from 'next/link';
import Button from '../ui/Button';
import GridPattern from '../patterns/GridPattern';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <GridPattern opacity={0.03} />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-dark via-obsidian to-obsidian" />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-electric to-transparent animate-scan-line" />
      </div>

      {/* Content Container */}
      <div className="container-base relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Headline */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Publishing the{' '}
              <span className="text-gradient">Future</span>{' '}
              of African Interactive Media
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-display font-medium text-slate-tech">
              Games. Music. Film. Art.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/for-studios">
                <Button
                  variant="primary"
                  size="xl"
                  className="shadow-glow-gold hover:scale-105"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Holographic Profile Image */}
          <div className="relative hidden lg:block">
            {/* Neon Glow Background */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-electric/20 via-transparent to-transparent blur-3xl" />

            {/* Tech Frame */}
            <div className="relative">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-blue-electric opacity-60" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-blue-electric opacity-60" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-blue-electric opacity-60" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-blue-electric opacity-60" />

              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo via-indigo-dark to-obsidian flex items-center justify-center">
                  <div className="text-center space-y-4 opacity-40 h-full">
                    <img className="h-full" src="dark-star.png" alt="Dark star radio"/>
                  </div>
                </div>

                {/* Neon Border */}
                <div className="absolute inset-0 border-2 border-blue-electric/30 rounded-2xl shadow-neon pointer-events-none" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-4 top-1/4 bg-indigo/90 backdrop-blur-sm border border-blue-electric/40 px-4 py-2 rounded-lg shadow-glow animate-float">
                <p className="text-xs text-blue-electric font-display font-bold">60K+ Plays</p>
              </div>

              <div className="absolute -left-4 bottom-1/3 bg-indigo/90 backdrop-blur-sm border border-gold/40 px-4 py-2 rounded-lg shadow-glow-gold animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-xs text-gold font-display font-bold">Featured Artists</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
