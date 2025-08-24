// src/semver/main_semantic_version.ts

import type { NoLeadingZeroInteger } from '@numbers/index.ts'
import type { MinTwoCharString } from '@strings/index.ts'

// Major, Minor, and Patch are non-negative integers with no leading zeros
type Major = `${NoLeadingZeroInteger}`
type Minor = `${NoLeadingZeroInteger}`
type Patch = `${NoLeadingZeroInteger}`

// This represents the main semantic version format (major.minor.patch).
export type MainSemanticVersion<T extends string = MinTwoCharString> = T &
  `${Major}.${Minor}.${Patch}`
