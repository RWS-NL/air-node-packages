import React, { FC, ChangeEvent, useState } from 'react';
import { Bar, Logo, NavBar, UserInfo, LinkTabProps } from '@rws-air/webcomponents';
import { Grid } from '@material-ui/core';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (_event: ChangeEvent<object>, newValue: number) => setActiveTab(newValue);

  const tabs: LinkTabProps[] = [
    { label: 'Tab 1', to: '/', external: true },
    { label: 'Tab 2', to: '/', external: false }
  ];

  return (
    <Grid container direction='column' justify='center' alignItems='stretch' alignContent='center'>
      <Grid key={1} item xs={12}>
        <Bar>
          <Logo />
          <UserInfo email='john.connor@rws.nl' reloginText='Opnieuw Inloggen' onReloginClick={console.log} />
        </Bar>
      </Grid>
      <Grid key={2} item xs={12}>
        <NavBar
          tabs={tabs}
          actionBarTitle='air-usermanagement-app'
          ActionBarProps={{
            title: 'air-usermanagement-app'
          }}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
