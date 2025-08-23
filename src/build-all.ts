#!/usr/bin/env bun

import { $ } from 'bun'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const packagesDir = 'packages'
const packageDirs = readdirSync(packagesDir).filter((name) =>
  statSync(join(packagesDir, name)).isDirectory(),
)

const buildPromises = packageDirs.map((pkg) => {
  const tsconfigPath = join(packagesDir, pkg, 'tsconfig.json')
  return $`bunx tsc --build ${tsconfigPath}`
})

await Promise.all(buildPromises)
