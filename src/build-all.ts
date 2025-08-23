// scripts/build-all.ts
import entryPoints from './getEntryPoints.js'
import { $ } from 'bun'

const packageNames = Array.from(
  new Set(
    entryPoints
      .filter((path) => path.startsWith('packages/'))
      .map((path) => path.split('/')[1]), // get package name
  ),
)

const packageBuilds = packageNames.map(
  (pkg) => $`bun run build packages/${pkg}`,
)

await Promise.all(packageBuilds)
console.log('All packages built.')
