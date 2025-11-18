import Hero from '../components/home/Hero'
import PressBar from '../components/home/PressBar'
import FeaturedArtist from '../components/home/FeaturedArtist'
import StudioCTA from '../components/home/StudioCTA'
import ProjectsPreview from '../components/home/ProjectsPreview'
import EcosystemDiagram from '../components/home/EcosystemDiagram'

export default function Home() {
  return (
    <div>
      <Hero />
      <PressBar />
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <FeaturedArtist />
        <StudioCTA />
        <ProjectsPreview />
        <EcosystemDiagram />
      </section>
    </div>
  )
}
