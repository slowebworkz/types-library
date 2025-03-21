import { readFile } from 'fs/promises';
import { resolve } from 'node:path';

import type { PackageJSON } from '@slowebworkz/string-types'

const PACKAGE_JSON = "package.json" as const;
const ENCODING = "utf-8" as const;

/**
 * Resolves the path to the package.json file in the specified directory.
 *
 * @param dir - The directory path.
 * @returns The resolved path to the package.json file.
 */
function getPackageJSONPath<T extends string>(dir: T): string {
  return Bun?.resolveSync
    ? Bun.resolveSync(dir, PACKAGE_JSON)
    : resolve(dir, PACKAGE_JSON);
}

/**
 * Reads and parses a JSON file.
 *
 * @param filePath - The path to the JSON file.
 * @returns The parsed JSON content.
 * @throws If the file cannot be read or parsed.
 */
async function readJsonFile<T = unknown>(filePath: string): Promise<T> {
  try {
    const fileContents = await readFile(filePath, ENCODING);
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Failed to read or parse JSON file at ${filePath}:`, error);
    throw error;
  }
}

/**
 * Reads and parses the package.json file in the specified directory.
 *
 * @param dir - The directory path.
 * @returns The parsed package.json content or null if an error occurs.
 */
export default async function getPackageJSON<T extends PackageJSON>(
  dir: string,
): Promise<T | null> {
  try {
    const packageJsonPath = getPackageJSONPath<typeof dir>(dir);
    return await readJsonFile<T>(packageJsonPath);
  } catch (error) {
    console.error(error);
    return null;
  }
}
