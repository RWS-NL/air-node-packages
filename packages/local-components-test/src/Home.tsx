/* eslint-disable no-console */
import React, { FC, Fragment } from 'react';
import { NavBar, LinkTabProps } from '@rws-air/webcomponents';

const tabs: LinkTabProps[] = [
  { label: 'tab 1', to: '/' },
  { label: 'tab 2', to: '/' }
];

const Home: FC = () => {
  return (
    <Fragment>
      <NavBar
        onTabChange={() => undefined}
        actionBarTitle='Gebruikers beheren - Local development'
        activeTab={0}
        tabs={tabs}
        ActionBarProps={{
          title: 'Gebruikers beheren - Local development',
          buttonAction: () => undefined,
          buttonLabel: 'Gebruiker toevoegen',
          shouldHaveButton: true
        }}
      />
    </Fragment>
  );
};

export default Home;
