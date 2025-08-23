import { resolve } from 'node:path'

export default function resolvePaths(...paths: string[]): string | null {
  if (paths.length === 0) return null
  try {
    return paths.reduce((acc, path) => resolve(acc, path))
  } catch (error) {
    console.error(error)
    return null
  }
}
