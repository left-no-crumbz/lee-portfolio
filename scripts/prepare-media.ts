import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const sources = {
  airframe: 'assets/projects/rc-plane-fixed-wing-uav/rc-plane-fixed-wing-uav-41.jpg',
  team: 'assets/projects/rc-plane-fixed-wing-uav/rc-plane-fixed-wing-uav-43.jpg',
  aircraft: 'assets/projects/aircraft-design/aircraft-design-18.png',
  controls: 'assets/projects/functional-control-surfaces-scale-model/functional-control-surfaces-model-01.jpeg',
  competition: 'assets/competitions/glider-making-competition-2026/glider-making-competition-champion-group.jpeg',
};
await mkdir('src/media', { recursive: true });
await Promise.all(Object.entries(sources).flatMap(([name, source]) => [640, 1280].map(width =>
  sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 })
    .withXmp(`<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" dc:source="User-supplied repository photograph or engineering screenshot: ${source}. Resized and WebP encoded; no generated content."/></rdf:RDF></x:xmpmeta>`)
    .toFile(`src/media/${name}-${width}.webp`)
)));
