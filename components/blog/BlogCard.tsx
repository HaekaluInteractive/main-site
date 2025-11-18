export default function BlogCard({ title, excerpt }: any){
  return (
    <div className="bg-[#071426] p-4 rounded">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-300 text-sm">{excerpt}</p>
    </div>
  )
}
