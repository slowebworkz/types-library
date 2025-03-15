// src/semver/dotted_string.ts

import type { MinTwoCharString } from "@slowebworkz/string-types";
import type { Segment } from "./segment.ts";

// Recursively splits a string into segments separated by dots
export type DottedString<T extends string = MinTwoCharString> =
  T extends `${infer First}.${infer Rest}`
    ? [Segment<First>, ...DottedString<Rest>]
    : [Segment<T>];
