import Link from 'next/link'
export default function ArtistCard({ name, image, slug }: any){
  return (
    <div className="bg-[#071426] p-4 rounded">
      <div className="h-40 bg-[#081426] mb-4 flex items-center justify-center">
        <img src={image} alt={name} className="object-cover h-full w-full rounded" />
      </div>
      <h4 className="font-semibold">{name}</h4>
      <div className="mt-3">
        <Link href={`/artists/${slug}`} className="text-haekaGold">View Profile</Link>
      </div>
    </div>
  )
}
