import type { MinTwoCharString } from '@slowebworkz/string-types'
export type Segment<T extends string = MinTwoCharString> =
  T extends `${infer F extends Lowercase<string>}${infer R}`
    ? `${F}${R}`
    : never
//# sourceMappingURL=segment.d.ts.map
