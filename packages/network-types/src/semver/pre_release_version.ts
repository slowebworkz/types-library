// src/semver/pre_release_version.ts

import type { MinTwoCharString } from "@slowebworkz/string-types";
import type { NonNegativeInteger } from "@slowebworkz/number-types";
import type { Segment } from "./segment.ts";

type PreReleaseBase<T extends string> = `-${Segment<T>}`;
type PreReleaseNumeric = `.${NonNegativeInteger}`;

// PreRelease type, allows any number of valid alphanumeric segments separated by hyphens
export type PreReleaseVersion<T extends string = MinTwoCharString> =
  `${PreReleaseBase<T>}${`${PreReleaseNumeric}` | ""}`;
