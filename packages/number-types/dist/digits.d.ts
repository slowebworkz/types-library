/**
 * A single digit from 0 to 9.
 */
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
/**
 * A digit from 1 to 9, excluding 0.
 * Used for the first character of two-digit numbers to prevent leading zeros.
 */
export type NonZeroDigit = Exclude<Digit, 0>
/**
 * A non-negative integer represented as a string.
 * This includes 0 and positive whole numbers without any upper limit.
 */
export type NonNegativeInteger = `${bigint}`
/**
 * A non-negative integer represented as a string without leading zeros.
 * Allows "0" as a special case but prevents strings like "01", "002", etc.
 */
export type NoLeadingZeroInteger = '0' | `${Exclude<NonNegativeInteger, '0'>}`
//# sourceMappingURL=digits.d.ts.map
