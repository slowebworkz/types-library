import { dirname } from 'node:path'
import { cwd } from 'node:process'

/**
 * Gets the main file path of the current process.
 *
 * - In Bun, returns the directory of `Bun.main`.
 * - In Node, returns `process.cwd()`.
 */
export default function getMainFilePath(): string {
  if (typeof Bun !== 'undefined' && typeof Bun.main === 'string') {
    return dirname(Bun.main)
  }
  return cwd()
}
