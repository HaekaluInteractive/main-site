export default function EcosystemDiagram() {
  const mediaTypes = [
    {
      id: 'games',
      label: 'Games',
      icon: '🎮',
      description: 'Interactive experiences',
      gradient: 'from-blue-electric to-indigo',
    },
    {
      id: 'music',
      label: 'Music',
      icon: '🎵',
      description: 'Sonic narratives',
      gradient: 'from-gold to-crimson',
    },
    {
      id: 'film',
      label: 'Film',
      icon: '🎬',
      description: 'Visual storytelling',
      gradient: 'from-crimson to-blue-electric',
    },
    {
      id: 'art',
      label: 'Art',
      icon: '🎨',
      description: 'Digital expression',
      gradient: 'from-indigo to-gold',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-dark/30 via-obsidian to-indigo-dark/30" />

      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-electric" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-base relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            The <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cross-media collaboration at the heart of everything we create
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-electric to-gold opacity-20 animate-glow-pulse blur-xl" />

              {/* Center circle */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo via-obsidian to-indigo-dark border-2 border-gold flex items-center justify-center shadow-glow-gold">
                <div className="text-center">
                  <div className="font-display font-bold text-xl md:text-2xl text-gold mb-1">HAEKALU</div>
                  <div className="text-xs text-slate-tech">Interactive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Top Left to Center */}
            <line
              x1="20%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-fade-in"
            />
            {/* Top Right to Center */}
            <line
              x1="80%"
              y1="20%"
              x2="50%"
              y2="50%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-fade-in"
            />
            {/* Bottom Left to Center */}
            <line
              x1="20%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="url(#gradient3)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-fade-in"
            />
            {/* Bottom Right to Center */}
            <line
              x1="80%"
              y1="80%"
              x2="50%"
              y2="50%"
              stroke="url(#gradient4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-fade-in"
            />

            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F4C95D" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F4C95D" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#D62828" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D62828" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1A1F3B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F4C95D" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Media Type Nodes */}
          <div className="relative grid grid-cols-2 gap-8 md:gap-16 min-h-[500px] md:min-h-[600px]">
            {mediaTypes.map((media, index) => (
              <div
                key={media.id}
                className={`relative ${
                  index === 0 ? 'justify-self-start self-start' :
                  index === 1 ? 'justify-self-end self-start' :
                  index === 2 ? 'justify-self-start self-end' :
                  'justify-self-end self-end'
                }`}
              >
                <div className="group cursor-pointer">
                  {/* Node */}
                  <div className={`relative bg-gradient-to-br ${media.gradient} p-1 rounded-2xl transition-all duration-normal hover:scale-110 hover:shadow-glow`}>
                    <div className="bg-obsidian rounded-2xl p-6 md:p-8">
                      {/* Icon */}
                      <div className="text-4xl md:text-5xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {media.icon}
                      </div>

                      {/* Label */}
                      <h3 className="font-display font-bold text-xl md:text-2xl text-gray-100 mb-2">
                        {media.label}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-300">
                        {media.description}
                      </p>
                    </div>
                  </div>

                  {/* Data point indicator */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full shadow-glow-gold animate-glow-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our projects span across all media, creating{' '}
            <span className="text-gold font-semibold">immersive transmedia experiences</span>{' '}
            that tell uniquely African stories through games, music, film, and interactive art.
          </p>
        </div>
      </div>
    </section>
  );
}
