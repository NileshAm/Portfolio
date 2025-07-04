import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectCard = ({
  src,
  children,
  href,
}: {
  src: string;
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="w-1/4 bg-secondary m-3 rounded-lg hover:scale-102 transition-all"
    >
      <div className="relative">
        <Image
          src={src}
          alt="Project image Image"
          className={"object-cover rounded-lg"}
          width={550}
          height={(550 / 4) * 3}
        />
        <div className="absolute bottom-0 right-0 h-1/4 w-full bg-gradient-to-t from-secondary to-transparent" />
      </div>
      <p className="p-2 text-justify">{children}</p>
    </Link>
  );
};

export default ProjectCard;
