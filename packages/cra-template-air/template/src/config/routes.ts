import { stringify } from '@favware/querystring';

export type RouteParamId = string | number;

export const query = <T>(params: T) => {
  const encodedUriParams = stringify(params);

  return encodedUriParams ? `?${encodedUriParams}` : '';
};

export const routes = {
  rootPath: '/'
};

export default routes;
