export default function PressBar() {
  const press = [
    { name: 'The Guardian', logo: 'The_Guardian_2018.svg' },
    { name: 'The Wire', logo: 'The_Wire_magazine_logo.svg' },
    { name: 'Metal Hammer', logo: 'Metal_Hammer_logo.svg' },
    { name: 'Pitchfork', logo: 'Pitchfork_logo.svg' },
  ];

  return (
    <section className="relative border-y border-indigo-light bg-indigo-dark/30 py-12">
      <div className="container-base">
        {/* Featured In Label */}
        <div className="text-center mb-8">
          <p className="text-sm font-display font-bold text-slate-tech uppercase tracking-wider">
            Featured In
          </p>
        </div>

        {/* Press Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-8">
          {press.map((item) => (
            <div
              key={item.name}
              className="text-gray-300 font-display font-bold text-sm md:text-base opacity-60 hover:opacity-100 hover:text-gold transition-all duration-fast"
            >
              <img src={`/${item.logo}`} alt={item.name} className="h-8 filter invert brightness-75 transition-all duration-fast" />
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Elevating artists and studios through global visibility and cross-media collaboration
          </p>
        </div>
      </div>
    </section>
  );
}
