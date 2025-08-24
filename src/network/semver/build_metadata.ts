// src/semver/build_metadata.ts

import type { MinTwoCharString } from '@strings/index.ts'
import type { Segment, DottedString } from './index.ts'

type Plus = '+'

// Build Metadata version type, ensures a leading `+` and handles dot-separated segments
export type BuildMetadataVersion<T extends string = MinTwoCharString> =
  T extends `${infer First}.${infer Rest}`
    ? `${Plus}${Segment<First> & string}${Rest extends '' ? '' : `.${DottedString<Rest> & string}`}`
    : `${Plus}${Segment<T> & string}`
