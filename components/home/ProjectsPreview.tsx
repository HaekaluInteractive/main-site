import Link from 'next/link';
import ProjectCard from '../projects/ProjectCard';
import Button from '../ui/Button';

const featuredProjects = [
  {
    title: 'Cyberpunk 2077: 107.5 Dark Star Radio - Cyko Arctic',
    image: 'phantom-liberty.png',
    excerpt: 'Neon-noir RPG exploring the digital underground of a futuristic city. 10M+ downloads across platforms.',
    slug: 'cyberpunk',
    tags: ['Game', 'Music', 'Featured'],
  },
  {
    title: 'Silence in the C-Dral',
    image: 'silence-in-the-c-dral.jpg',
    excerpt: 'Interactive audio narrative blending traditional Saharan music with sci-fi storytelling.',
    slug: 'silence-in-the-c-dral',
    tags: ['Music', 'Video' ],
  },
  {
    title: 'EMBLEM BLEM',
    image: 'emblem-blem.jpg',
    excerpt: 'Coastal surf-roaming adventure game set in a near-future East African paradise.',
    slug: 'emblem-blem',
    tags: ['Music', 'Video' ],
  },
];

export default function ProjectsPreview() {
  return (
    <section className="relative py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo/10 to-transparent rounded-3xl" />

      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-display font-bold text-blue-electric uppercase tracking-wider px-4 py-2 bg-blue-electric/10 border border-blue-electric/30 rounded-full">
              Portfolio
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Publishing groundbreaking games, music, and interactive experiences from Africa for the world
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
