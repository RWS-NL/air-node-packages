import Grid from '@material-ui/core/Grid';
import { LinkTabProps, Logo, NavBar } from '@rws-air/webcomponents';
import classnames from 'classnames';
import Bar from 'components/Bar';
import Router from 'config/Router';
import React, { ChangeEvent, FC, useState } from 'react';
import css from 'styles/modules/AppBase.module.scss';

export const AppBase: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: LinkTabProps[] = [{ label: '{{REPLACE_ME}}', to: '/', external: false }];

  const handleTabChange = (_event: ChangeEvent<object>, newValue: number) => setActiveTab(newValue);

  return (
    <Grid container direction='column' justify='center' alignItems='center' alignContent='center'>
      <Grid key={1} item xs={12} className={css.ie11LogoHeaderCorrection}>
        <Bar>
          <Logo />
        </Bar>
      </Grid>
      <Grid key={2} item xs={12} className={classnames(css.ie11BlueBarCorrection, css.tabBar)}>
        <NavBar actionBarTitle='{{REPLACE_ME}}' tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
        <Router />
      </Grid>
    </Grid>
  );
};

export default AppBase;
