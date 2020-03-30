export enum API_METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export enum ENDPOINTS {
  CONFIG = 'config'
}

export enum API_VERSION {
  v1 = 'v1'
}

export enum ACTION_ENDPOINTS {
  GET_CONFIG = 'getConfig'
}

export const CONFIG_PATH = (version: API_VERSION) => `/api/${version}/${ENDPOINTS.CONFIG}`;
