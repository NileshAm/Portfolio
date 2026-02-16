import Image, { type ImageProps } from "next/image";
import sizesJson from "@/generated/image-sizes.json";

type ImageDimensions = Readonly<{
  width: number;
  height: number;
}>;

type ImageSizesMap = Readonly<Record<string, ImageDimensions>>;

/**
 * Type-guard helpers (no `any`)
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isImageDimensions(value: unknown): value is ImageDimensions {
  return (
    isRecord(value) &&
    typeof value.width === "number" &&
    typeof value.height === "number"
  );
}

function isImageSizesMap(value: unknown): value is ImageSizesMap {
  if (!isRecord(value)) return false;
  return Object.values(value).every(isImageDimensions);
}

/**
 * Validate JSON once at module load (fail fast if generated file is wrong)
 */
const sizes: ImageSizesMap = (() => {
  if (!isImageSizesMap(sizesJson)) {
    throw new Error("Invalid shape for generated image-sizes.json");
  }
  return sizesJson;
})();

type ImgProps = Readonly<{
  src: string;
  alt: string;
  containerClassName?: string;
  className?: string;
  fill?: boolean;
  loading?: ImageProps["loading"];
}> &
  Omit<ImageProps, "src" | "alt" | "fill" | "loading" | "className">;

export default function Img({
  src,
  alt,
  containerClassName,
  className,
  fill = true,
  loading = "lazy",
  ...props
}: ImgProps) {
  const dim: ImageDimensions = sizes[src] ?? { width: 1, height: 1 };

  return (
    <div className={containerClassName}>
      <div
        className={`relative overflow-hidden ${className ?? ""}`}
        style={{ aspectRatio: `${dim.width} / ${dim.height}` }}
      >
        <Image src={src} alt={alt} fill={fill} loading={loading} {...props} />
      </div>
    </div>
  );
}
