/**
 * Imports single digit and non-zero digit types.
 */
import type { Digit, NonZeroDigit } from '@slowebworkz/number-types'

/**
 * Represents the century part of a four-digit year.
 * Includes the 1900s and any century starting from 20 and above.
 */
type CenturyDigits = '19' | `${Exclude<NonZeroDigit, 0 | 1>}${Digit}`

/**
 * Represents the two-digit suffix of a four-digit year.
 * Ranges from "00" to "99".
 */
type YearSuffix = `${Digit}${Digit}`

/**
 * Represents a valid four-digit year in ISO 8601 format ("YYYY").
 */
export type ISO_8601_Year = `${CenturyDigits}${YearSuffix}` // YYYY
