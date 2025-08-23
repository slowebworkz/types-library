import { existsSync, readdirSync } from 'fs'

// Get package names from process.env
const packages =
  process.env['PACKAGES']
    ?.split(',')
    .map((pkg) => pkg.trim())
    .filter(Boolean) ?? []

const filterExisting = (paths: string[]) => paths.filter(existsSync)

// Warn if any listed packages are missing entry points
const missing = packages.filter(
  (pkg) => !existsSync(`packages/${pkg}/src/index.ts`),
)
if (missing.length) {
  console.warn(
    `Warning: missing entry points for packages: ${missing.join(', ')}`,
  )
}

// Get all package entry points from filesystem
const allPackages = filterExisting(
  readdirSync('packages', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => `packages/${dirent.name}/src/index.ts`),
)

// Use .env packages if set, otherwise use all detected packages
const entryPoints = [
  './src/index.ts',
  ...(packages.length
    ? filterExisting(packages.map((pkg) => `packages/${pkg}/src/index.ts`))
    : allPackages),
]

console.log(entryPoints)

export default entryPoints
