import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

// Render the actual app without a browser, then check its navigation and media.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const { projects } = await server.ssrLoadModule('/src/data/projects.ts');
  const html = renderToString(createElement(App));
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]);
  for (const anchor of anchors) assert(ids.has(anchor), `Missing anchor: #${anchor}`);
  const assets = new Set([
    ...projects.map(project => project.image),
    ...[...html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)].map(match => decodeURI(match[1])),
  ]);
  for (const asset of assets) assert(existsSync(path.join(process.cwd(), 'public', asset)), `Missing asset: ${asset}`);
  for (const project of projects) {
    assert(project.title && project.description && project.stack, 'Incomplete project');
    for (const link of [project.liveUrl, project.githubUrl]) assert.equal(new URL(link).protocol, 'https:');
  }
  assert(html.includes('SAI TEJA'));
  assert(html.includes('Previous featured project') && html.includes('Next featured project'));
  assert(html.includes('role="tablist"') && html.includes('role="tabpanel"'));
  assert(html.includes('aria-label="Search projects or technology stack"'));
  console.log(`Verified ${projects.length} projects, ${assets.size} local assets, and ${anchors.length} internal links. App server rendering passed.`);
} finally {
  await server.close();
}
