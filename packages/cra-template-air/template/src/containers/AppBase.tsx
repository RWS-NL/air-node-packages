import Grid from '@material-ui/core/Grid';
import { LinkTabProps, Logo, NavBar, UserInfo } from '@rws-air/webcomponents';
import classnames from 'classnames';
import Bar from 'components/Bar';
import Router from 'config/Router';
import { ConfigContextDefaults, ConfigContextProvider } from 'contexts/ConfigContext';
import { PermissionContextDefaults, PermissionContextProvider } from 'contexts/PermissionContext';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { handleGetConfig } from 'store/config/configActions';
import { ConfigResponseType } from 'store/config/configTypes';
import { Oauth2Permissions } from 'store/oauth2/oauth2Types';
import css from 'styles/modules/AppBase.module.scss';
import { Trans } from 'react-i18next';

export interface AppBaseProps {
  email?: string;
  handleGetConfig: typeof handleGetConfig.request;
  oauth2Permissions: Oauth2Permissions;
  config: ConfigResponseType;
}

export const AppBase: FC<AppBaseProps> = ({ handleGetConfig: getConfig, ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: ChangeEvent<object>, newValue: number) => setActiveTab(newValue);

  useEffect(() => {
    getConfig();
  }, [getConfig]);

  const permissionContextValues: Oauth2Permissions = {
    ...PermissionContextDefaults,
    ...props.oauth2Permissions
  };

  const configContextValues: ConfigResponseType = {
    ...ConfigContextDefaults,
    ...props.config
  };

  const tabs: LinkTabProps[] = [{ label: '{{REPLACE_ME}}', to: '/', external: false }];

  return (
    <ConfigContextProvider value={configContextValues}>
      <PermissionContextProvider value={permissionContextValues}>
        <Grid container direction='column' justify='center' alignItems='center' alignContent='center'>
          <Grid key={1} item xs={12} className={css.ie11LogoHeaderCorrection}>
            <Bar>
              <Logo />
              <UserInfo
                email='email@example.com'
                reloginText={<Trans i18nKey={'navigation.oauth2.re_login'} />}
                onReloginClick={() => console.log('This should trigger a relogin')}
              />
            </Bar>
          </Grid>
          <Grid key={2} item xs={12} className={classnames(css.ie11BlueBarCorrection, css.tabBar)}>
            <NavBar actionBarTitle='{{REPLACE_ME}}' tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            <Router />
          </Grid>
        </Grid>
      </PermissionContextProvider>
    </ConfigContextProvider>
  );
};

export default AppBase;
