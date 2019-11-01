/**
 * Transforms the first letter to a capital then adds all the rest after it
 * Differs from {@link sentenceCase} in that the casing of the text after the first letter is retained
 * @param str Text to transform
 */
export const capitilizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default capitilizeFirstLetter;