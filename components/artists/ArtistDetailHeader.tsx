export default function ArtistDetailHeader({ artist }: any){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="h-72 bg-[#071826] rounded">Portrait</div>
      <div>
        <h1 className="text-3xl font-bold">{artist.name}</h1>
        <p className="text-gray-300">{artist.bio}</p>
      </div>
    </section>
  )
}
