interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeline: string;
  details: string[];
}

export default function SubmissionProcess() {
  const steps: ProcessStep[] = [
    {
      number: '1',
      title: 'Submit Your Game',
      timeline: 'Day 1',
      description: 'Send us your game demo, pitch deck, and vision',
      details: [
        'Demo build (PC/Mac)',
        'Pitch deck (PDF)',
        'Gameplay trailer',
        'Target audience & market',
      ],
    },
    {
      number: '2',
      title: 'Review & Feedback',
      timeline: '1-2 Weeks',
      description: 'Our team evaluates your game and provides detailed feedback',
      details: [
        'Full playthrough & analysis',
        'Market fit assessment',
        'Partnership proposal',
        'Strategic recommendations',
      ],
    },
    {
      number: '3',
      title: 'Partnership & Planning',
      timeline: '2-4 Weeks',
      description: 'We finalize the agreement and create your launch roadmap',
      details: [
        'Contract & terms',
        'Launch timeline',
        'Service selection',
        'Team introductions',
      ],
    },
    {
      number: '4',
      title: 'Launch & Beyond',
      timeline: 'Ongoing',
      description: 'We execute the plan and support your game post-launch',
      details: [
        'Pre-launch marketing',
        'Launch coordination',
        'Post-launch support',
        'Ongoing optimization',
      ],
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline connector (desktop) */}
      <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-electric via-gold to-blue-electric opacity-30" />

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Step card */}
            <div className="relative bg-indigo/50 border border-indigo-light/30 rounded-2xl p-8 h-full transition-all duration-normal hover:border-blue-electric/50 hover:-translate-y-2 hover:shadow-glow">
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-electric to-gold rounded-xl flex items-center justify-center font-display font-bold text-2xl text-obsidian shadow-neon z-10">
                {step.number}
              </div>

              {/* Timeline badge */}
              <div className="inline-block mb-4 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
                <span className="text-xs font-display font-semibold text-gold">
                  {step.timeline}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-gray-100">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2 pt-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-gray-400"
                    >
                      <span className="text-blue-electric mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector arrow (mobile/tablet) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 text-gold text-2xl">
                  ↓
                </div>
              )}
            </div>

            {/* Connector arrow (desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-4 text-gold text-3xl z-20">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom info */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-indigo/50 border border-indigo-light/30 rounded-xl px-6 py-4">
          <p className="text-gray-300">
            <span className="font-display font-semibold text-gold">Average time from submission to launch:</span>{' '}
            8-12 weeks
          </p>
        </div>
      </div>
    </div>
  );
}
