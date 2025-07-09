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
        "border-4 md:w-1/2 border-secondary rounded-lg bg-secondary flex ms-4 my-3 mx-3 hover:scale-102 transition-all flex-col lg:flex-row " +
        className
      }
    >
      <div className="relative ">
        <Image
          src={CDNFetch(image)}
          alt="Image"
          className={"object-cover rounded-lg w-full " + imgClassName}
          width={400}
          height={(400 / 4) * 3}
        />
        <div className="absolute lg:top-0 bottom-0 right-0 lg:h-full lg:w-1/4 w-full h-1/4 lg:bg-gradient-to-l bg-gradient-to-t from-secondary to-transparent" />
      </div>

      <div className="lg:w-2/3 text-justify p-2 pe-4">{children}</div>
    </Link>
  );
};

export default HomeCard;
