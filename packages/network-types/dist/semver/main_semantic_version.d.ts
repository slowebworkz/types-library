import type { NoLeadingZeroInteger } from '@slowebworkz/number-types'
import type { MinTwoCharString } from '@slowebworkz/string-types'
type Major = `${NoLeadingZeroInteger}`
type Minor = `${NoLeadingZeroInteger}`
type Patch = `${NoLeadingZeroInteger}`
export type MainSemanticVersion<T extends string = MinTwoCharString> = T &
  `${Major}.${Minor}.${Patch}`
export {}
//# sourceMappingURL=main_semantic_version.d.ts.map
