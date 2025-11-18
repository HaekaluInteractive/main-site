import Link from 'next/link';
import Button from '../ui/Button';
import ScanLineEffect from '../patterns/ScanLineEffect';

export default function StudioCTA() {
  const steps = [
    {
      number: '1',
      title: 'Submit concept',
      description: 'Send us your game demo and pitch deck',
    },
    {
      number: '2',
      title: 'Collaboration review',
      description: 'We evaluate and provide feedback within 2 weeks',
    },
    {
      number: '3',
      title: 'Launch support',
      description: 'Go global together with our publishing platform',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-dark via-obsidian to-indigo-dark" />
      <ScanLineEffect />

      {/* Content */}
      <div className="container-base relative z-10">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Indie Studio?{' '}
            <span className="text-gold">Let's Publish Your Game.</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-indigo/50 border border-blue-electric/20 rounded-2xl p-8 h-full transition-all duration-normal hover:border-blue-electric/50 hover:-translate-y-2 hover:shadow-glow">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-electric to-gold rounded-xl flex items-center justify-center font-display font-bold text-2xl text-obsidian shadow-neon">
                  {step.number}
                </div>

                {/* Content */}
                <div className="space-y-3 pt-4">
                  <h3 className="font-display font-bold text-2xl text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-electric/50 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Link href="/for-studios">
            <Button variant="primary" size="xl" className="shadow-glow-gold">
              Submit Your Game
            </Button>
          </Link>
        </div>

        {/* Cyberstreet Branding (Featured Project) */}
        <div className="text-center pt-12 border-t border-indigo-light">
          <p className="text-sm text-slate-tech mb-4 font-display font-semibold uppercase tracking-wider">
            Featured Partnership
          </p>
          <div className="relative inline-block">
            <h3 className="font-display font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-electric via-crimson to-blue-electric animate-shimmer bg-[length:200%_100%]">
              CYBERPUNK 2077: PHANTOM LIBERTY
            </h3>
            {/* Neon underglow */}
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-electric/30 via-crimson/30 to-blue-electric/30 -z-10" />
          </div>
          <p className="text-gray-300 mt-2">Neon-noir RPG • 10M+ Downloads</p>
        </div>
      </div>
    </section>
  );
}
