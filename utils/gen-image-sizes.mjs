import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

const publicDir = path.join(process.cwd(), "public");
const outFile = path.join(
  process.cwd(),
  "generated",
  "image-sizes.json",
);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    if (!/\.(png|jpe?g|webp|avif|gif)$/i.test(e.name)) return [];
    const rel = "/" + path.relative(publicDir, p).replace(/\\/g, "/");
    const buf = fs.readFileSync(p);
    const dim = imageSize(buf);
    return [[rel, { width: dim.width ?? 0, height: dim.height ?? 0 }]];
  });
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
const map = Object.fromEntries(walk(publicDir));
fs.writeFileSync(outFile, JSON.stringify(map, null, 2));
console.log(`Wrote ${Object.keys(map).length} entries to ${outFile}`);
