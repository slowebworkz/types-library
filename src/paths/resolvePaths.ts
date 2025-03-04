import { resolve } from "node:path";

/**
 * Resolves a single path with an accumulation of paths.
 *
 * @param accumulation - The accumulated path string.
 * @param path - The path to resolve.
 * @returns The resolved path.
 */
function resolvePath<T extends string>(accumulation: string, path: T): string {
  return accumulation.length === 0
    ? path
    : Bun?.resolveSync
      ? Bun.resolveSync(path, accumulation)
      : resolve(path, accumulation);
}

/**
 * Resolves multiple paths into a single path.
 *
 * @param paths - The paths to resolve.
 * @returns The resolved path or null if an error occurs.
 */
export default function resolvePaths<T extends string>(
  ...paths: T[]
): string | null {
  try {
    return paths.reduce((acc, path) => resolvePath<T>(acc, path), "");
  } catch (error) {
    console.error(error);
    return null;
  }
}
