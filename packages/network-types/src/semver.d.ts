// src/semver.d.ts

import type { MinTwoCharString } from '@slowebworkz/string-types'
import type { MainSemanticVersion } from './semver/main_semantic_version.ts'
import type { PreReleaseVersion } from './semver/pre_release_version.ts'
import type { BuildMetadataVersion } from './semver/build_metadata.ts'

export type Semver<T extends string = MinTwoCharString> = 
  | MainSemanticVersion<T>
  | `${MainSemanticVersion}${PreReleaseVersion<T>}`
  | `${MainSemanticVersion}${PreReleaseVersion<T>}${BuildMetadataVersion<T>}`;