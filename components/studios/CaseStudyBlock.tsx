import Link from 'next/link';

interface CaseStudy {
  artist: string;
  game: string;
  stat: string;
  statLabel: string;
  description: string;
  quote: string;
  tags: string[];
  gradient: string;
}

export default function CaseStudyBlock() {
  const caseStudies: CaseStudy[] = [
    {
      artist: 'Lord Spikeheart',
      game: 'Cyberpunk 2077',
      stat: '500K+',
      statLabel: 'Downloads',
      description:
        "How Lord Spikeheart's dark experimental futurism became the sonic identity of Cyberpunk's neon-noir universe.",
      quote: 'The music didn\'t just complement the game—it became inseparable from the experience.',
      tags: ['Music Licensing', 'Press Campaign', 'Multi-platform'],
      gradient: 'from-blue-electric to-crimson',
    },
    {
      artist: 'The Adept',
      game: 'Reign EP',
      stat: '15+',
      statLabel: 'Press Features',
      description:
        'An interactive audio narrative that merged traditional Saharan music with sci-fi storytelling, reaching global audiences.',
      quote: 'Haekalu helped us turn an experimental concept into a critically acclaimed experience.',
      tags: ['Publishing', 'Press & PR', 'Cross-media'],
      gradient: 'from-gold to-crimson',
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {caseStudies.map((study) => (
        <article
          key={`${study.artist}-${study.game}`}
          className="group relative bg-indigo/50 rounded-2xl overflow-hidden border border-indigo-light/30 transition-all duration-normal hover:border-gold/50 hover:-translate-y-2 hover:shadow-glow"
        >
          {/* Header with gradient */}
          <div className={`relative h-32 bg-gradient-to-br ${study.gradient} p-8 flex items-center justify-between`}>
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl text-white mb-1">
                {study.stat}
              </div>
              <div className="text-sm text-white/80">{study.statLabel}</div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/30" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Title */}
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-100 mb-2 group-hover:text-gold transition-colors duration-fast">
                {study.artist} × {study.game}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {study.description}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative border-l-2 border-gold pl-4 italic text-gray-300">
              <span className="absolute -left-1 -top-2 text-2xl text-gold">"</span>
              {study.quote}
            </blockquote>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-display font-semibold text-blue-electric px-3 py-1 bg-blue-electric/10 border border-blue-electric/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href={`/projects/${study.game.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 text-gold font-display font-semibold text-sm hover:gap-3 transition-all duration-fast"
              >
                Read Full Case Study
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Bottom corner accent */}
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
        </article>
      ))}
    </div>
  );
}
