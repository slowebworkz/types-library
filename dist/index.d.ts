//#region src/numbers/digits.d.ts
/**
 * A single digit from 0 to 9.
 */
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * A digit from 1 to 9, excluding 0.
 * Used for the first character of two-digit numbers to prevent leading zeros.
 */
type NonZeroDigit = Exclude<Digit, 0>;
/**
 * A non-negative integer represented as a string.
 * This includes 0 and positive whole numbers without any upper limit.
 */
type NonNegativeInteger = `${bigint}`;
/**
 * A non-negative integer represented as a string without leading zeros.
 * Allows "0" as a special case but prevents strings like "01", "002", etc.
 */
type NoLeadingZeroInteger = '0' | `${Exclude<NonNegativeInteger, '0'>}`;
//#endregion
//#region src/dates/days.d.ts
/**
 * Represents the possible days for the first nine days of the month.
 * Optionally takes a prefix, such as "0" for ISO 8601 formatting.
 *
 * @template T - Optional prefix for the day, like "0" for leading zero.
 */
type FirstDays<T extends string = ''> = `${T}${NonZeroDigit}`;
/**
 * Represents the possible days from the 10th to the 31st of the month.
 */
type LastDays = `${1 | 2}${Digit}` | '30' | '31';
/**
 * Represents a valid day of the month from '1' to "31".
 */
type Day = `${FirstDays}` | `${LastDays}`;
/**
 * Represents a valid day of the month in ISO 8601 format ("DD"),
 * ensuring leading zeros for single-digit days.
 */
type ISO_8601_Day = `${FirstDays<'0'>}` | `${LastDays}`;
//#endregion
//#region src/dates/months.d.ts
/**
 * Represents a valid month of the year from "1" to "12".
 * Optionally takes a prefix, such as "0" for ISO 8601 formatting.
 *
 * @template T - Optional prefix for the month, like "0" for leading zero.
 */
type Month<T extends string = ''> = `${T}${NonZeroDigit}` | `1${0 | 1 | 2}`;
/**
 * Represents a valid month in ISO 8601 format ("MM"),
 * ensuring leading zeros for single-digit months.
 */
type ISO_8601_Month = Month<'0'>;
//#endregion
//#region src/dates/timezone.d.ts
declare const WORLD_TIME_ZONES: readonly ["UTC", "GMT", "America/New_York", "America/Los_Angeles", "Europe/London", "Asia/Tokyo", "Australia/Sydney", "Africa/Nairobi", "Europe/Berlin", "Pacific/Auckland", "Europe/Moscow", "Asia/Shanghai", "America/Chicago", "America/Denver", "Asia/Dubai", "Europe/Paris", "Asia/Kolkata", "Pacific/Honolulu", "Europe/Rome", "Africa/Johannesburg", "Australia/Brisbane", "Australia/Perth", "Europe/Amsterdam", "America/Sao_Paulo", "Asia/Singapore", "Pacific/Guam", "America/Argentina/Buenos_Aires", "Asia/Kuala_Lumpur", "America/Edmonton", "Asia/Seoul", "EST", "PST", "CST", "JST", "GMT", "UTC", "BST", "CEST", "AEDT", "NZDT", "Local", "ServerTime", "GameTime", "Game/ServerTime", "MUSH/GameTimezone"];
type WorldTimezone = (typeof WORLD_TIME_ZONES)[number] | `UTC${'-'}${number}` | `UTC+${number}` | `UTC-${number}`;
//#endregion
//#region src/dates/years.d.ts
/**
 * Represents the century part of a four-digit year.
 * Includes the 1900s and any century starting from 20 and above.
 */
type CenturyDigits = '19' | `${Exclude<NonZeroDigit, 0 | 1>}${Digit}`;
/**
 * Represents the two-digit suffix of a four-digit year.
 * Ranges from "00" to "99".
 */
type YearSuffix = `${Digit}${Digit}`;
/**
 * Represents a valid four-digit year in ISO 8601 format ("YYYY").
 */
type ISO_8601_Year = `${CenturyDigits}${YearSuffix}`;
//#endregion
//#region src/strings/chars.d.ts
/**
 * Enforces a string that's at least two characters in length.
 *
 * This type represents any string that is guaranteed to have a minimum length of 2 characters.
 */
type MinTwoCharString = `${string}${string}`;
/**
 * Ensures the string does not start with a period or underscore.
 *
 * This type guarantees that the string does not start with either a period ('.') or an underscore ('_').
 * If the string starts with one of these characters, it will resolve to `never`, effectively making it invalid.
 *
 * @template T - The string to be validated.
 * // Invalid
 * const invalidStr: NoLeadingSpecialChar<'_example'> = '_example'; // Error
 */
type NoLeadingSpecialChar<T extends MinTwoCharString> = T extends `${'.' | '_'}${string}` ? never : T;
/**
 * Ensures there are no spaces in the string.
 *
 * This type ensures that the string does not contain any space characters.
 * If the string contains a space, it will resolve to `never`, making it invalid.
 *
 * @template T - The string to be validated.
 * // Invalid
 * const invalidStr: NoSpaces<'has space'> = 'has space'; // Error
 */
type NoSpaces<T extends string> = T extends `${string} ${string}` ? never : T;
//#endregion
//#region src/strings/licences.d.ts
/**
 * A constant array that contains a list of valid SPDX license identifiers.
 *
 * SPDX licenses are widely used identifiers for open source licensing, and this array includes
 * common licenses such as MIT, Apache-2.0, GPL-3.0, and more.
 *
 * @example
 * // Accessing a license
 * const license: typeof SPDX_LICENSES[number] = "MIT";
 */
declare const SPDX_LICENSES: readonly ["MIT", "Apache-2.0", "GPL-3.0", "GPL-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "LGPL-3.0", "LGPL-2.1", "MPL-2.0", "CDDL-1.0", "EPL-2.0", "AGPL-3.0", "CC0-1.0", "Unlicense", "BSL-1.0", "Zlib", "Artistic-2.0", "OFL-1.1", "EUPL-1.2", "IPL-1.0", "MS-PL", "MS-RL", "NCSA", "PostgreSQL", "UPL-1.0", "WTFPL", "UNLICENSED"];
type SPDX_LICENSES_TYPE = (typeof SPDX_LICENSES)[number];
/**
 * Represents a single license object with a type and associated URL.
 *
 * This interface is used to model a license object, which consists of a license type (from the
 * `SPDX_LICENSES` array) and a URL (which must be at least 2 characters long).
 *
 * @interface LicenseObject
 * @property {SPDX_LICENSES_TYPE} type - The type of the license, which should be one of the SPDX license identifiers.
 * @property {MinTwoCharString} url - The URL associated with the license, which must be at least two characters long.
 *
 * @example
 * // Creating a license object
 * const license: LicenseObject = {
 *   type: "MIT",
 *   url: "https://opensource.org/licenses/MIT"
 * };
 */
interface LicenseObject {
  type: SPDX_LICENSES_TYPE;
  url: MinTwoCharString;
}
/**
 * Type representing an SPDX license.
 *
 * This type can either be a string value that corresponds to one of the predefined SPDX licenses
 * (from the `SPDX_LICENSES` array) or an array of `LicenseObject` representing multiple licenses
 * with their corresponding URLs.
 *
 * @type SPDX_License
 * @example
 * // Using a single license type
 * const license: SPDX_License = "MIT";
 *
 * // Using an array of license objects
 * const licenseList: SPDX_License = [
 *   { type: "MIT", url: "https://opensource.org/licenses/MIT" },
 *   { type: "Apache-2.0", url: "https://opensource.org/licenses/Apache-2.0" }
 * ];
 */
type SPDX_License = SPDX_LICENSES_TYPE | LicenseObject[];
//#endregion
//#region src/network/semver/build_metadata.d.ts
type Plus = '+';
type BuildMetadataVersion<T extends string = MinTwoCharString> = T extends `${infer First}.${infer Rest}` ? `${Plus}${Segment<First> & string}${Rest extends '' ? '' : `.${DottedString<Rest> & string}`}` : `${Plus}${Segment<T> & string}`;
//#endregion
//#region src/network/semver/dotted_string.d.ts
type DottedString<T extends string = MinTwoCharString> = T extends `${infer First}.${infer Rest}` ? [Segment<First>, ...DottedString<Rest>] : [Segment<T>];
//#endregion
//#region src/network/semver/main_semantic_version.d.ts
type Major = `${NoLeadingZeroInteger}`;
type Minor = `${NoLeadingZeroInteger}`;
type Patch = `${NoLeadingZeroInteger}`;
type MainSemanticVersion<T extends string = MinTwoCharString> = T & `${Major}.${Minor}.${Patch}`;
//#endregion
//#region src/network/semver/pre_release_version.d.ts
type PreReleaseBase<T extends string> = `-${Segment<T>}`;
type PreReleaseNumeric = `.${NonNegativeInteger}`;
type PreReleaseVersion<T extends string = MinTwoCharString> = `${PreReleaseBase<T>}${`${PreReleaseNumeric}` | ''}`;
//#endregion
//#region src/network/semver/segment.d.ts
type Segment<T extends string = MinTwoCharString> = T extends `${infer F extends Lowercase<string>}${infer R}` ? `${F}${R}` : never;
//#endregion
//#region src/network/semver.d.ts
type Semver<T extends string = MinTwoCharString> = MainSemanticVersion<T> | `${MainSemanticVersion}${PreReleaseVersion<T>}` | `${MainSemanticVersion}${PreReleaseVersion<T>}${BuildMetadataVersion<T>}`;
//#endregion
export { BuildMetadataVersion, Day, Digit, DottedString, ISO_8601_Day, ISO_8601_Month, ISO_8601_Year, MainSemanticVersion, MinTwoCharString, Month, NoLeadingSpecialChar, NoLeadingZeroInteger, NoSpaces, NonNegativeInteger, NonZeroDigit, PreReleaseVersion, SPDX_License, Segment, Semver, WorldTimezone };
//# sourceMappingURL=index.d.ts.map