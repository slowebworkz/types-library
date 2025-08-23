import type { MinTwoCharString } from '@slowebworkz/string-types';
import type { NonNegativeInteger } from '@slowebworkz/number-types';
import type { Segment } from './segment.ts';
type PreReleaseBase<T extends string> = `-${Segment<T>}`;
type PreReleaseNumeric = `.${NonNegativeInteger}`;
export type PreReleaseVersion<T extends string = MinTwoCharString> = `${PreReleaseBase<T>}${`${PreReleaseNumeric}` | ''}`;
export {};
//# sourceMappingURL=pre_release_version.d.ts.map