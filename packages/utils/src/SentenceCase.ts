/**
 * Transforms given text to sentence case (First letter uppercase, rest lowercase)
 * @param text Text to transform
 */
export const sentenceCase = (text: string) => `${text.charAt(0).toUpperCase()}${text.substring(1).toLowerCase()}`;

export default sentenceCase;