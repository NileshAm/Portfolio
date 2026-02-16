import Image, { ImageProps } from "next/image";
import { getImageSizeFromPublic } from "@utils/imageFetch";

interface ImgProps extends Omit<ImageProps, "className"> {
  src: string;
  containerClassName?: string; // Class for the wrapper div
  className?: string; // Class for the image itself
  alt: string;
}

const Img = ({
  src,
  alt,
  containerClassName,
  className,
  fill = true, // Default to fill as requested for sizing via CSS
  loading = "lazy",
  ...props
}: ImgProps) => {
  const img = getImageSizeFromPublic(src);
  return (
    <div className={containerClassName}>
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio: `${img.width} / ${img.height}` }}
      >
        <Image src={src} alt={alt} fill={fill} loading={loading} {...props} />
      </div>
    </div>
  );
};

export default Img;
