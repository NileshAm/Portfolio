import { ReactNode } from "react";
import Img from "@comps/ui/Img";
import Link from "next/link";

const ProjectCard = ({
  src,
  children,
  href,
  title,
  tags = [],
}: {
  src: string;
  children: ReactNode;
  href: string;
  title: string;
  tags?: string[];
}) => {
  return (
    <Link href={href} className="group relative flex flex-col h-full bg-surface/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <Img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          aspectRatio={4/3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-textSecondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {children}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
