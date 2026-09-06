import { existsSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const directory = resolve('dist/client');
const prefix = '/english-growth-map';
// vinext emits path-prefixed assets in a matching subdirectory. GitHub already
// mounts the artifact at that prefix, so its _next folder belongs at the root.
const nestedAssets = resolve(directory, `.${prefix}/_next`);
const finalAssets = resolve(directory, '_next');
if (existsSync(nestedAssets)) {
  if (existsSync(finalAssets)) throw new Error('Refusing to overwrite an existing _next folder');
  renameSync(nestedAssets, finalAssets);
}
const html = readFileSync(resolve(directory, 'index.html'), 'utf8');
const paths = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
  .map((match) => match[1]).filter((url) => url.startsWith('/'));
for (const url of paths) {
  if (!url.startsWith(`${prefix}/`)) throw new Error(`Asset is outside the project path: ${url}`);
  const file = resolve(directory, url.slice(prefix.length + 1).split('?')[0]);
  if (!file.startsWith(`${directory}/`) || !existsSync(file)) throw new Error(`Missing asset: ${url}`);
}
for (const label of ['英语成长地图', '优质老师', '电子书']) {
  if (!html.includes(label)) throw new Error(`Missing page section: ${label}`);
}
writeFileSync(resolve(directory, '.nojekyll'), '');
console.log(`GitHub Pages export verified: ${paths.length} local page assets and all key sections.`);
