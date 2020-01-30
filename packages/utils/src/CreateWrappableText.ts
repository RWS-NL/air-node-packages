/**
 * Inserts a space in any text after every maxLength amount of characters, allowing Material-UI to gracefully wrap it
 * @param text text to split
 * @param maxLength The maximum length of a text section @default 75
 */
export function createWrappableText(text: string, maxLength = 75) {
  const splitRegex = new RegExp(`.{1,${maxLength}}`, 'g');
  const splitContent = text.match(splitRegex);

  if (splitContent) return splitContent.join(' ');

  return text;
}

export default createWrappableText;
