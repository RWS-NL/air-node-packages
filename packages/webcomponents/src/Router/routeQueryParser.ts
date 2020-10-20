import { stringify } from '@favware/querystring';

/**
 * Safely stringifies queryparameters and prefixes a `?`.
 * Applies URL encoding with `encodeURIComponent()`.
 * In case an empty object was provided an empty string is returned
 * @param params Queryparams to stringify
 * @returns Stringified params or empty string
 * @see [`@favware/querystring`](https://favware.tech/querystring)
 */
export const routeQueryParser = <T>(params: T) => {
  const encodedUriParams = stringify(params);

  return encodedUriParams ? `?${encodedUriParams}` : '';
};
