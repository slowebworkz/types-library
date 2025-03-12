import type { NoLeadingZeroInteger } from '@numbers/digits'
import type { MinTwoCharString } from './chars'

// Major, Minor, and Patch are non-negative integers with no leading zeros
type Major = `${NoLeadingZeroInteger}`;
type Minor = `${NoLeadingZeroInteger}`;
type Patch = `${NoLeadingZeroInteger}`;

// Matches a valid segment: alphanumeric string, no spaces or special characters
type Segment = `${MinTwoCharString & Lowercase<MinTwoCharString>}`; // Restrict to lowercase letters and digits

// PreRelease type, allows any number of valid alphanumeric segments separated by hyphens
type PreRelease = `${Segment}`;

// Build Metadata (alphanumeric with optional hyphens)
type BuildMetadata = `${Segment}`; // Alphanumeric characters and hyphens allowed

// This represents the main semantic version format (major.minor.patch).
type MainSemanticVersion = `${Major}.${Minor}.${Patch}`;

// This allows for pre-release versions like 1.0.0-alpha
type PreReleaseVersion = `${MainSemanticVersion}-${PreRelease}`;

// \${number}.${number}.${number}+${string}`: This allows for build metadata versions like 1.0.0+20130313144700.
type BuildMetadataVersion =
  `${MainSemanticVersion}-${PreRelease}+${BuildMetadata}`;

export type Semver =
  | `${MainSemanticVersion}`
  | `${PreReleaseVersion}`
  | `${BuildMetadataVersion}`;
