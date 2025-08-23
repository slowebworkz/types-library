import type { MinTwoCharString } from '@slowebworkz/string-types';
import type { Segment } from './segment.ts';
export type DottedString<T extends string = MinTwoCharString> = T extends `${infer First}.${infer Rest}` ? [Segment<First>, ...DottedString<Rest>] : [Segment<T>];
//# sourceMappingURL=dotted_string.d.ts.map