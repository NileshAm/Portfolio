export function CDNFetch(ImageName: string): string {
  if (process.env.Production_status === "development") {
    return ImageName;
  }
  return `https://cdn.jsdelivr.net/gh/NileshAm/Portfolio@latest/public${ImageName}`;
}
