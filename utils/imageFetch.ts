import path from "path";
import fs from "fs";
import { imageSize } from "image-size";

export function CDNFetch(ImageName: string): string {
  if (process.env.NEXT_PUBLIC_Production_status === "development") {
    return ImageName;
  }
  return `https://cdn.jsdelivr.net/gh/NileshAm/Portfolio@latest/public${ImageName}`;
}


export function getImageSizeFromPublic(publicPath: string) {
  const fullPath = path.join(process.cwd(), "public", publicPath);
  const buffer = fs.readFileSync(fullPath);

  const dim = imageSize(buffer); // ✅ Buffer -> ok

  return {
    width: dim.width ?? 0,
    height: dim.height ?? 0,
  };
}

