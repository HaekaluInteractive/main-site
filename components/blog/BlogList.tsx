import BlogCard from './BlogCard'
const posts = [
  { title: 'Scoring Games with African Artists', excerpt: 'A deep dive into creative process.' },
  { title: 'Launching in Emerging Markets', excerpt: 'Practical tips for indies.' }
]
export default function BlogList(){
  return <div className="grid md:grid-cols-2 gap-6">{posts.map(p => <BlogCard key={p.title} {...p} />)}</div>
}
