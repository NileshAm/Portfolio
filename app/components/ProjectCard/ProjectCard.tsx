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
      className="lg:w-1/4 md:w-1/2 bg-secondary md:m-3 mx-6 my-3 rounded-lg hover:scale-102 transition-all"
    >
      <div className="relative">
        <Image
          src={src}
          alt="Project image Image"
          className={"object-cover rounded-lg"}
          width={550}
          height={(550 / 4) * 3}
        />
        <div className="absolute -bottom-1 right-0 h-1/4 w-full bg-gradient-to-t from-secondary to-transparent" />
      </div>
      <p className="px-5 py-3 text-justify leading-relaxed ">{children}</p>
    </Link>
  );
};

export default ProjectCard;
