import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectCard = ({
  src,
  children,
  href,
  title,
}: {
  src: string;
  children: ReactNode;
  href: string;
  title: string;
}) => {
  return (
    <Link
      href={href}
      className="lg:w-1/4 md:w-1/2 bg-secondary md:m-3 mx-6 my-3 rounded-lg hover:scale-102 transition-all flex flex-col"
    >
      <div className="relative">
        <Image
          src={src}
          alt={`${title} Image`}
          className={"object-cover rounded-t-lg w-full"}
          width={550}
          height={(550 / 4) * 3}
        />
        <div className="absolute -bottom-1 right-0 h-1/4 w-full bg-gradient-to-t from-secondary to-transparent" />
      </div>
      <div className="p-5 flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2 project-title">{title}</h3>
        <p className="text-justify leading-relaxed text-gray-100 text-sm">{children}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
