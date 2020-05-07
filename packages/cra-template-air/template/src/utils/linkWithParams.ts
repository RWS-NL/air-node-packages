import { parse, stringify } from '@favware/querystring';
import windowLocationService from './WindowLocationService';

export const linkWithParams = <T>(
  path: string,
  paramsToAdd: T,
  shouldMerge?: boolean,
  search?: string
) => {
  if (!search) search = windowLocationService.search;

  const currentParams = parse(search);
  let newSearchString = stringify(paramsToAdd);

  if (shouldMerge) {
    newSearchString = stringify({ ...currentParams, ...paramsToAdd });
  }

  if (newSearchString !== '') {
    return `${path}?${newSearchString}`;
  }

  return path;
};

export default linkWithParams;
