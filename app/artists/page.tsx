import ArtistCard from '../../components/artists/ArtistCard'

const artists = [
  { name: 'Lord Spikeheart', slug: 'lord-spikeheart', image: 'Spikeheart.webp' },
  { name: 'Chrisman', slug: 'chrisman', image: 'Chrisman.jpg' }
]

export default function ArtistsPage(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Artists & Collaborators</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {artists.map(a => <ArtistCard key={a.slug} {...a} />)}
      </div>
    </section>
  )
}
