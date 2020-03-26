import { isDevEnv } from '@rws-air/utils';
import { createContext } from 'react';
import { ConfigResponseType } from 'store/config/configTypes';
import WindowLocationService from 'utils/WindowLocationService';

export const pcfDomainUri = WindowLocationService.host.split('-').slice(3).join('-');

export const ConfigContextDefaults: ConfigResponseType = {
  hasLoaded: false,
  space: { name: '' },
  uris: {
    project: isDevEnv ? 'http://localhost:3004' : `https://air-project-app-${pcfDomainUri}`,
    explorer: isDevEnv ? 'https://localhost:3005' : `https://air-explorer-app-${pcfDomainUri}`,
    userManagement: isDevEnv ? 'http://localhost:3002' : `https://air-usermanagement-app-${pcfDomainUri}`
  }
};

export const ConfigContext = createContext(ConfigContextDefaults);
export const ConfigContextProvider = ConfigContext.Provider;
