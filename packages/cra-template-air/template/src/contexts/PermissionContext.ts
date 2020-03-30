import { createContext } from 'react';
import { Oauth2Permissions } from 'store/oauth2/oauth2Types';

export const PermissionContextDefaults: Oauth2Permissions = {
  canDoALot: false
};

export const PermissionContext = createContext(PermissionContextDefaults);
export const PermissionContextProvider = PermissionContext.Provider;
