interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesGrid() {
  const services: Service[] = [
    {
      icon: '🎯',
      title: 'Publishing & Strategy',
      description: 'Comprehensive go-to-market planning and execution for your game',
      features: [
        'Market analysis & positioning',
        'Launch strategy & timeline',
        'Platform optimization',
        'Revenue modeling',
      ],
    },
    {
      icon: '📰',
      title: 'Press & PR',
      description: 'Get featured in major gaming and mainstream media outlets',
      features: [
        'Press kit creation',
        'Media outreach campaigns',
        'Interview coordination',
        'Review management',
      ],
    },
    {
      icon: '🎵',
      title: 'Music Licensing',
      description: 'Access to world-class African musicians for your soundtrack',
      features: [
        'Curated artist matching',
        'Exclusive music tracks',
        'Original score composition',
        'Licensing & rights clearance',
      ],
    },
    {
      icon: '🚀',
      title: 'Community & Launch',
      description: 'Build and engage your player community before and after launch',
      features: [
        'Social media strategy',
        'Discord community setup',
        'Influencer partnerships',
        'Launch event planning',
      ],
    },
    {
      icon: '📦',
      title: 'Distribution',
      description: 'Multi-platform publishing across all major stores and platforms',
      features: [
        'Steam, Epic, GOG setup',
        'Console porting support',
        'Mobile store optimization',
        'Update & patch management',
      ],
    },
    {
      icon: '🎬',
      title: 'Multi-media Integration',
      description: 'Expand your game into music videos, comics, and other media',
      features: [
        'Soundtrack album release',
        'Music video production',
        'Art book creation',
        'Documentary content',
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <article
          key={service.title}
          className="group relative bg-indigo/50 rounded-2xl overflow-hidden border border-indigo-light/30 transition-all duration-normal hover:border-gold/50 hover:-translate-y-2 hover:shadow-glow p-8"
        >
          {/* Icon */}
          <div className="text-5xl mb-4 transition-transform duration-normal group-hover:scale-110">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-2xl text-gray-100 mb-3 group-hover:text-gold transition-colors duration-fast">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <span className="text-gold mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
        </article>
      ))}
    </div>
  );
}
