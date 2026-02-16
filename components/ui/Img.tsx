import Image, { ImageProps } from "next/image";

interface ImgProps extends Omit<ImageProps, "className" | "height" | "width"> {
  src: string;
  alt: string;
  containerClassName?: string;
  className?: string;
  aspectRatio: number; // width / height
}

const Img = ({
  src,
  alt,
  containerClassName,
  className,
  aspectRatio,
  loading = "lazy",
  ...props
}: ImgProps) => {
  return (
    <div className={containerClassName}>
      <div
        className={`relative overflow-hidden ${className || ""}`}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading={loading}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          {...props}
        />
      </div>
    </div>
  );
};


export default Img;
