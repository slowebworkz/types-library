/**
 * Enforces a string that's at least two characters in length.
 * 
 * This type represents any string that is guaranteed to have a minimum length of 2 characters.
 */
export type MinTwoCharString = `${string}${string}`;

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
export type NoLeadingSpecialChar<T extends string> =
  T extends `${"." | "_"}${string}` ? never : T;

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
export type NoSpaces<T extends string> = T extends `${string} ${string}`
  ? never
  : T;
