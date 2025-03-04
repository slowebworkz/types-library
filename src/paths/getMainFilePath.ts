import { dirname } from "node:path";
import { cwd } from "node:process";

/**
 * Type representing the main file path of the current process.
 * If Bun.main is defined, it uses the type of Bun.main; otherwise, it uses the return type of cwd.
 */
type MainFilePath = typeof Bun extends { main: string }
  ? typeof Bun.main
  : ReturnType<typeof cwd>;

/**
 * Gets the main file path of the current process.
 *
 * @returns The main file path.
 */
export default function getMainFilePath(): MainFilePath {
  return Bun?.main ? dirname(Bun.main) : cwd();
}
