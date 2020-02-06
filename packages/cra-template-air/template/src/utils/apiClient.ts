import { BAD_REQUEST, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED } from 'http-status';
import { API_METHOD } from './apiPaths';
import { AIRHandledError } from './constants';

export default class ApiClient implements ApiClientInterface {
  public static accessToken: string | undefined;
  private static apiUrl: string | undefined;

  public get accessToken(): string | undefined {
    return ApiClient.accessToken;
  }

  public set accessToken(value: string | undefined) {
    ApiClient.accessToken = value;
  }

  public get apiUrl(): string | undefined {
    return ApiClient.apiUrl;
  }

  public set apiUrl(value: string | undefined) {
    ApiClient.apiUrl = value;
  }

  public constructor(apiUrl?: string) {
    this.apiUrl = apiUrl || '';
  }

  public static async request<T>(method: API_METHOD, path: string, body?: any): Promise<FetchResponse<T>> {
    try {
      const response = await fetch(`${ApiClient.apiUrl || ''}${path}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ApiClient.accessToken}`
        }
      });

      if (!response.ok) throw new AIRHandledError(response.status, `${response.status} error`);

      const data = await ApiClient.parseBody<T>(response);

      return {
        data: data || ({} as any),
        status: response.status,
        statusText: response.statusText
      };
    } catch (err) {
      if (err.toString().includes(BAD_REQUEST.toString())) throw new AIRHandledError(BAD_REQUEST, '400 error');
      if (err.toString().includes(UNAUTHORIZED.toString())) throw new AIRHandledError(UNAUTHORIZED, '401 error');
      if (err.toString().includes(FORBIDDEN.toString())) throw new AIRHandledError(FORBIDDEN, '403 error');
      if (err.toString().includes(NOT_FOUND.toString())) throw new AIRHandledError(NOT_FOUND, '404 error');

      throw new AIRHandledError(INTERNAL_SERVER_ERROR, 'Internal Fetch Error');
    }
  }

  private static parseBody<T>(response: Response): Promise<T> | undefined {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return response.json() as Promise<T>;
    }

    return undefined;
  }

  public async request<T>(method: API_METHOD, path: string, body?: any): Promise<FetchResponse<T>> {
    return ApiClient.request<T>(method, path, body);
  }
}

export interface FetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiClientInterface {
  request: <T, B = object>(method: API_METHOD, path: string, body?: B) => Promise<FetchResponse<T>>;
}
