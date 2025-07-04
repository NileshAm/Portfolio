import { CDNFetch } from "@utils/imageFetch";
import Image from "next/image";
import Link from "next/link";

const HomeCard = ({
  children,
  className,
  imgClassName = "",
  image,
  href,
}: {
  children: string;
  className?: string;
  imgClassName?: string;
  image: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={
        "border-4 border-secondary rounded-lg bg-secondary flex ms-4 w-1/2 my-3 hover:scale-102 transition-all " +
        className
      }
    >
      <div className="relative w-2/3">
        <Image
          src={CDNFetch(image)}
          alt="Image"
          className={"object-cover rounded-lg" + imgClassName}
          width={300}
          height={(300 / 4) * 3}
        />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-secondary to-transparent" />
      </div>

      <div className="w-2/3 text-justify p-2">{children}</div>
    </Link>
  );
};

export default HomeCard;
