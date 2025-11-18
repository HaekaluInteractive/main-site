import ProjectCard from '../../components/projects/ProjectCard'

const sampleProjects = [
  { title: 'Cyberpunk 2077: 107.5 Dark Star Radio - Cyko Arctic', excerpt: 'A neon-drenched dystopian RPG.', slug: 'cyberpunk', image: '/phantom-liberty.png' },
  { title: 'Silence in the C-Dral', excerpt: 'A narrative-driven audio game.', slug: 'silence-in-the-c-dral', image: '/silence-in-the-c-dral.jpg' },
  { title: 'EMBLEM BLEM', excerpt: 'An experimental surf-roamer.', slug: 'emblem-blem', image: '/emblem-blem.jpg' },
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
