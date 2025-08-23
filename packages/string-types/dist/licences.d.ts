import type { MinTwoCharString } from './index.ts'
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
declare const SPDX_LICENSES: readonly [
  'MIT',
  'Apache-2.0',
  'GPL-3.0',
  'GPL-2.0',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'ISC',
  'LGPL-3.0',
  'LGPL-2.1',
  'MPL-2.0',
  'CDDL-1.0',
  'EPL-2.0',
  'AGPL-3.0',
  'CC0-1.0',
  'Unlicense',
  'BSL-1.0',
  'Zlib',
  'Artistic-2.0',
  'OFL-1.1',
  'EUPL-1.2',
  'IPL-1.0',
  'MS-PL',
  'MS-RL',
  'NCSA',
  'PostgreSQL',
  'UPL-1.0',
  'WTFPL',
  'UNLICENSED',
]
type SPDX_LICENSES_TYPE = (typeof SPDX_LICENSES)[number]
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
  type: SPDX_LICENSES_TYPE
  url: MinTwoCharString
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
export type SPDX_License = SPDX_LICENSES_TYPE | LicenseObject[]
export {}
//# sourceMappingURL=licences.d.ts.map
