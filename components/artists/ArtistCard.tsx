import Link from 'next/link'
export default function ArtistCard({ name, slug }: any){
  return (
    <div className="bg-[#071426] p-4 rounded">
      <div className="h-40 bg-[#081426] mb-4 flex items-center justify-center">Portrait</div>
      <h4 className="font-semibold">{name}</h4>
      <div className="mt-3">
        <Link href={`/artists/${slug}`} className="text-haekaGold">View Profile</Link>
      </div>
    </div>
  )
}
