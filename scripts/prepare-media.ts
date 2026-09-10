import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const sources = {
  airframe: 'assets/projects/rc-plane-fixed-wing-uav/rc-plane-fixed-wing-uav-41.jpg',
  team: 'assets/projects/rc-plane-fixed-wing-uav/rc-plane-fixed-wing-uav-43.jpg',
  aircraft: 'assets/projects/aircraft-design/aircraft-design-18.png',
  controls: 'assets/projects/functional-control-surfaces-scale-model/functional-control-surfaces-model-01.jpeg',
  competition: 'assets/competitions/glider-making-competition-2026/glider-making-competition-champion-group.jpeg',
  quadcopter: 'assets/projects/quadcopter-drone/quadcopter-drone-build-06.jpg',
  windTunnel: 'assets/projects/wind-tunnel/wind-tunnel-01.jpg',
};
await mkdir('src/media', { recursive: true });
const widths = [320, 640, 768, 960, 1280];
async function encode(input: string, name: string, width: number) {
  await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 })
    .withXmp(`<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" dc:source="User-supplied repository photograph or engineering screenshot: ${input}. Resized and WebP encoded; no generated content."/></rdf:RDF></x:xmpmeta>`)
    .toFile(`src/media/${name}-${width}.webp`);
}
await Promise.all(Object.entries(sources).flatMap(([name, source]) =>
  widths.map(width => encode(source, name, width))
));
// design/validation were committed directly (no originals in this repo):
// derive only the missing rungs from their 1280 files, leaving the
// committed 640/1280 bytes untouched.
await Promise.all(["design", "validation"].flatMap(name =>
  [320, 768, 960].map(width => encode(`src/media/${name}-1280.webp`, name, width))
));
const dimensions = Object.fromEntries(await Promise.all([...Object.keys(sources), "design", "validation"].map(async name => {
  const { width, height } = await sharp(`src/media/${name}-1280.webp`).metadata();
  return [name, { width, height }];
})));
await writeFile('src/media/dimensions.json', `${JSON.stringify(dimensions, null, 2)}\n`);
