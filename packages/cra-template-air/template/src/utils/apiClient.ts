import { BAD_REQUEST, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED } from 'http-status';
import { API_METHOD } from './apiPaths';
import { AIRHandledError } from './constants';

export enum FetchResultTypes {
  JSON,
  Blob,
  Text,
  Result
}

export interface FetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export default class ApiClient {
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

  public static async fetch(method: API_METHOD, url: string, type: FetchResultTypes.Blob, body?: any): Promise<FetchResponse<Blob>>;
  public static async fetch(method: API_METHOD, url: string, type: FetchResultTypes.Text, body?: any): Promise<FetchResponse<string>>;
  public static async fetch(method: API_METHOD, url: string, type: FetchResultTypes.Result, body?: any): Promise<Response>;
  public static async fetch<T extends unknown>(method: API_METHOD, url: string, type: FetchResultTypes.JSON, body?: any): Promise<FetchResponse<T>>;
  public static async fetch<T extends unknown>(method: API_METHOD, url: string, type: FetchResultTypes, body?: any): Promise<Response | FetchResponse<Blob> | FetchResponse<string> | FetchResponse<T>>;
  public static async fetch<T extends unknown>(method: API_METHOD, url: string, type: FetchResultTypes, body?: any) {
    try {
      const response: Response = await fetch(`${ApiClient.apiUrl || ''}${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ApiClient.accessToken}`
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) throw new AIRHandledError(response.status, `${response.status} error`);

      switch (type) {
        case FetchResultTypes.Result:
          return response;
        case FetchResultTypes.Blob:
          return {
            data: await response.blob(),
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          } as FetchResponse<Blob>;
        case FetchResultTypes.JSON:
          return {
            data: await ApiClient.parseBody<T>(response),
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          } as FetchResponse<T>;
        case FetchResultTypes.Text:
          return {
            data: await response.text(),
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          } as FetchResponse<string>;
        default:
          throw new TypeError(`Unknown fetch type ${type}`);
      }
    } catch (err) {
      if (err.toString().includes(BAD_REQUEST.toString())) throw new AIRHandledError(BAD_REQUEST, '400 error');
      if (err.toString().includes(UNAUTHORIZED.toString())) throw new AIRHandledError(UNAUTHORIZED, '401 error');
      if (err.toString().includes(FORBIDDEN.toString())) throw new AIRHandledError(FORBIDDEN, '403 error');
      if (err.toString().includes(NOT_FOUND.toString())) throw new AIRHandledError(NOT_FOUND, '404 error');

      throw new AIRHandledError(INTERNAL_SERVER_ERROR, 'Internal Fetch Error');
    }
  }

  private static async parseBody<T>(response: Response): Promise<T | undefined> {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return (await response.json()) as Promise<T>;
    }

    return undefined;
  }

  public async fetch(method: API_METHOD, url: string, type: FetchResultTypes.Blob, body?: any): Promise<FetchResponse<Blob>>;
  public async fetch(method: API_METHOD, url: string, type: FetchResultTypes.Text, body?: any): Promise<FetchResponse<string>>;
  public async fetch(method: API_METHOD, url: string, type: FetchResultTypes.Result, body?: any): Promise<Response>;
  public async fetch<T extends unknown>(method: API_METHOD, url: string, type: FetchResultTypes.JSON, body?: any): Promise<FetchResponse<T>>;
  public async fetch<T extends unknown>(method: API_METHOD, url: string, type: FetchResultTypes, body?: any): Promise<Response | FetchResponse<Blob> | FetchResponse<string> | FetchResponse<T>>;
  public async fetch<T extends unknown>(method: API_METHOD, url: string, type: FetchResultTypes, body?: any) {
    return ApiClient.fetch<T>(method, url, type, body);
  }
}
