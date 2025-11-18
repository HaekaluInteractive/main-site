import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  tags?: string[];
}

export default function ProjectCard({ title, excerpt, slug, image, tags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <article className="relative bg-indigo/50 rounded-2xl overflow-hidden border border-indigo-light/30 transition-all duration-normal hover:border-gold/50 hover:-translate-y-2 hover:shadow-glow">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo via-indigo-dark to-obsidian">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-slow group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3 opacity-30">
                <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-blue-electric/30 to-gold/30" />
                <p className="text-slate-tech text-xs px-4">Project Thumbnail</p>
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-normal bg-gradient-to-br from-blue-electric/10 to-gold/10" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-display font-semibold text-blue-electric px-2 py-1 bg-blue-electric/10 border border-blue-electric/30 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h4 className="font-display font-bold text-xl text-gray-100 group-hover:text-gold transition-colors duration-fast">
            {title}
          </h4>

          {/* Excerpt */}
          <p className="text-gray-300 leading-relaxed line-clamp-2">
            {excerpt}
          </p>

          {/* CTA */}
          <div className="pt-2 flex items-center gap-2 text-gold font-display font-semibold text-sm group-hover:gap-3 transition-all duration-fast">
            View
            <span className="text-lg">→</span>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
      </article>
    </Link>
  );
}
