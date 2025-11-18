import ProjectCard from '../../components/projects/ProjectCard'

const sampleProjects = [
  { title: 'Cyberstreet Games', excerpt: 'A neon-drenched dystopian RPG.', slug: 'cyberstreet', image: '/placeholder.png' },
  { title: 'Desert Echoes', excerpt: 'A narrative-driven audio game.', slug: 'desert-echoes', image: '/placeholder.png' },
  { title: 'Kilifi Drift', excerpt: 'An experimental surf-roamer.', slug: 'kilifi-drift', image: '/placeholder.png' },
]

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Projects & Collaborations</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {sampleProjects.map(p => <ProjectCard key={p.slug} {...p} />)}
      </div>
    </section>
  )
}
