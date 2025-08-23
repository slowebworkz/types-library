import getMainFilePath from './paths/getMainFilePath.ts'
import getPackageJSON from './paths/getPackageJSON.ts'

import type { PackageJson } from 'type-fest'

export async function getPackagesDirectory(): Promise<
  PackageJson['workspaces'] | null
> {
  const rootDir = getMainFilePath()
  try {
    const packageJson = await getPackageJSON(rootDir)
    return packageJson?.workspaces ?? null
  } catch (error) {
    console.error('Error reading package.json or finding workspaces:', error)
    return null
  }
}
