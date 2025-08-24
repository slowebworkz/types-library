// src/semver/dotted_string.ts

import type { MinTwoCharString } from '@strings/index.ts'
import type { Segment } from './index.ts'

// Recursively splits a string into segments separated by dots
export type DottedString<T extends string = MinTwoCharString> =
  T extends `${infer First}.${infer Rest}`
    ? [Segment<First>, ...DottedString<Rest>]
    : [Segment<T>]
