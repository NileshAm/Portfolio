export function CDNFetch(ImageName: string): string {
  if (process.env.NEXT_PUBLIC_Production_status === "development") {
    return ImageName;
  }
  return `https://cdn.jsdelivr.net/gh/NileshAm/Portfolio@latest/public${ImageName}`;
}

