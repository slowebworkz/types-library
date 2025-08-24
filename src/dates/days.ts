/**
 * Imports single digit and non-zero digit types.
 */
import type { Digit, NonZeroDigit } from '@numbers/index.ts'

/**
 * Represents the possible days for the first nine days of the month.
 * Optionally takes a prefix, such as "0" for ISO 8601 formatting.
 *
 * @template T - Optional prefix for the day, like "0" for leading zero.
 */
type FirstDays<T extends string = ''> = `${T}${NonZeroDigit}`

/**
 * Represents the possible days from the 10th to the 31st of the month.
 */
type LastDays = `${1 | 2}${Digit}` | '30' | '31'

/**
 * Represents a valid day of the month from '1' to "31".
 */
export type Day = `${FirstDays}` | `${LastDays}`

/**
 * Represents a valid day of the month in ISO 8601 format ("DD"),
 * ensuring leading zeros for single-digit days.
 */
export type ISO_8601_Day = `${FirstDays<'0'>}` | `${LastDays}` // DD
