import getMainFilePath from './paths/getMainFilePath.ts';
import getPackageJSON from './paths/getPackageJSON.ts';

import type { PackageJSON } from "package.d.ts";

export async function getPackagesDirectory(): Promise<
  PackageJSON["workspaces"] | null
> {
  // Get the directory of the main entry file
  const rootDir = getMainFilePath();

  try {
    const packageJson = await getPackageJSON(rootDir);

    if (!packageJson) {
      throw new Error();
    }

    // Extract the "workspaces" property
    if (packageJson?.workspaces) {
      const { workspaces } = packageJson;
      return workspaces;
    }
  } catch (error) {
    console.error("Error reading package.json or finding workspaces:", error);
    throw error;
  }
  return null;
}
