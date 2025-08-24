// src/semver/pre_release_version.ts

import type { MinTwoCharString } from '@strings/index.ts'
import type { NonNegativeInteger } from '@numbers/index.ts'
import type { Segment } from './index.ts'

type PreReleaseBase<T extends string> = `-${Segment<T>}`
type PreReleaseNumeric = `.${NonNegativeInteger}`

// PreRelease type, allows any number of valid alphanumeric segments separated by hyphens
export type PreReleaseVersion<T extends string = MinTwoCharString> =
  `${PreReleaseBase<T>}${`${PreReleaseNumeric}` | ''}`
