// src/semver.d.ts

import type { MinTwoCharString } from '@strings/index.ts'
import type {
  BuildMetadataVersion,
  MainSemanticVersion,
  PreReleaseVersion,
} from './semver/index.ts'

export type Semver<T extends string = MinTwoCharString> =
  | MainSemanticVersion<T>
  | `${MainSemanticVersion}${PreReleaseVersion<T>}`
  | `${MainSemanticVersion}${PreReleaseVersion<T>}${BuildMetadataVersion<T>}`
