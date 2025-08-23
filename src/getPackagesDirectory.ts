import getMainFilePath from './paths/getMainFilePath.ts'
import getPackageJSON from './paths/getPackageJSON.ts'

import type { PackageJSON } from '@slowebworkz/string-types'

export async function getPackagesDirectory(): Promise<
  PackageJSON['workspaces'] | null
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
