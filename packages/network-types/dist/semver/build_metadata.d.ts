import type { MinTwoCharString } from '@slowebworkz/string-types'
import type { Segment } from './segment.ts'
import type { DottedString } from './dotted_string.ts'
type Plus = '+'
export type BuildMetadataVersion<T extends string = MinTwoCharString> =
  T extends `${infer First}.${infer Rest}`
    ? `${Plus}${Segment<First> & string}${Rest extends '' ? '' : `.${DottedString<Rest> & string}`}`
    : `${Plus}${Segment<T> & string}`
export {}
//# sourceMappingURL=build_metadata.d.ts.map
