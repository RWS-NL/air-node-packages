import { ReactNode } from 'react';

export type label = string | ReactNode;
export type cellContent = label;
export type customCss = string | string[];
export type dataQa = string;

export const objectHasProperty = <O extends {}>(obj: O, prop: keyof O) => prop in obj && obj[prop];

/**
 * Split a string by its latest space character in a range from the character 0 to the selected one.
 * @param str The text to split.
 * @param length The length of the desired string.
 * @param char The character to split with
 */
export function splitText(str: string, length: number, char = ' ') {
  const x = str.substring(0, length).lastIndexOf(char);
  const pos = x === -1 ? length : x;

  return str.substring(0, pos);
}

/**
 * Split a text by its latest space character in a range from the character 0 to the selected one.
 * @param str The text to split.
 * @param length The length of the desired string.
 */
export function cutText(str: string, length: number) {
  if (str.length < length) return str;
  const cut = splitText(str, length - 3);
  if (cut.length < length - 3) return `${cut}...`;

  return `${cut.slice(0, length - 3)}...`;
}