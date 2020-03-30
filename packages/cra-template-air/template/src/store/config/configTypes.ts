export enum configActionTypes {
  HANDLE_GET_CONFIG = '@@config/HANDLE_GET_CONFIG',
  HANDLE_GET_CONFIG_SUCCESS = '@@config/HANDLE_GET_CONFIG_SUCCESS',
  HANDLE_GET_CONFIG_FAILED = '@@config/HANDLE_GET_CONFIG_FAILED'
}

export type configState = ConfigResponseType;

export interface ConfigResponseType {
  hasLoaded: boolean;
  space: {
    name: string;
  };
  uris: {
    userManagement: string;
    project: string;
    explorer: string;
  };
}
