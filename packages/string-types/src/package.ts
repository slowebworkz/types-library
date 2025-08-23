// src/package.d.ts

import type { Semver } from '@slowebworkz/network-types'
import type { MinTwoCharString, SPDX_License } from './index.ts'

const Deps = [
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'optionalDependencies',
] as const

type Dependencies = Record<(typeof Deps)[number], Record<string, Semver>>

type Author<T extends string = MinTwoCharString> =
  | T
  | {
      name: T
      email?: T
      url?: T
    }

type Url<T extends string = MinTwoCharString> = T

type Engines<T extends string | number | symbol = MinTwoCharString> = Record<
  T,
  Semver | T
>

interface Bugs {
  url: Url
}

interface Repository {
  type: MinTwoCharString
  url: Url
}

type Workspaces<T extends string = MinTwoCharString> =
  | T[] // Option 1: Array of strings
  | {
      // Option 2: Object with specific properties
      packages: T[] // Required 'packages' field: an array of string globs
      nohoist?: T[] // Optional 'nohoist' field: array of strings
    }

interface Urls<T extends string = MinTwoCharString>
  extends Record<'main' | 'homepage', T> {
  main: T
  author: Author
  bugs: Bugs
  repository: Repository
  homepage: T
  module: T
  types: T
  type: T
}

interface Strings<T extends string = MinTwoCharString> {
  description: T
  scripts: { [key: string]: T }
  engines: Engines<T>
  contributors: T[]
  keywords: T[]
  files: T[]
  licence: SPDX_License
  workspaces: Workspaces<T>
}

type PackageJSONName<T extends string> = T extends `${infer First}${infer Rest}`
  ? First extends Lowercase<string> | '-' | '_' | `${number}`
    ? PackageJSONName<Rest>
    : never
  : T

interface OptionalPackageJSON<T extends string = MinTwoCharString>
  extends Dependencies,
    Urls<T>,
    Strings<T> {
  private: boolean
}

export interface PackageJSON extends Partial<OptionalPackageJSON> {
  name: PackageJSONName<string>
  version: Semver
}
