/**
 * Imports single digit and non-zero digit types.
 */
import type { NonZeroDigit } from '@slowebworkz/number-types'

/**
 * Represents a valid month of the year from "1" to "12".
 * Optionally takes a prefix, such as "0" for ISO 8601 formatting.
 *
 * @template T - Optional prefix for the month, like "0" for leading zero.
 */
export type Month<T extends string = ''> =
  | `${T}${NonZeroDigit}`
  | `1${0 | 1 | 2}`

/**
 * Represents a valid month in ISO 8601 format ("MM"),
 * ensuring leading zeros for single-digit months.
 */
export type ISO_8601_Month = Month<'0'> // MM
