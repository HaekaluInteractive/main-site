export default function ProjectCaseStudy({ project }: any){
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </article>
  )
}
