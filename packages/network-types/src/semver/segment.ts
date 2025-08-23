// src/semver/segment.ts

import type { MinTwoCharString } from '@slowebworkz/string-types'

// Ensure each segment is alphanumeric, lowercase, and has at least 2 characters
export type Segment<T extends string = MinTwoCharString> =
  T extends `${infer F extends Lowercase<string>}${infer R}`
    ? `${F}${R}` // Ensures it's a lowercase string and matches alphanumeric
    : never
