import { Tabs } from '@mui/material';
import { LinkTabProps } from '@src/LinkTab';
import { NavBar, NavBarProps } from '@src/NavBar';
import { shallow, ShallowWrapper } from 'enzyme';
import React, { SyntheticEvent } from 'react';

let currentValue = 0;
const onTabChange = jest.fn((_event: SyntheticEvent<Element, Event>, newVal: number) => (currentValue = newVal));
const tabs: LinkTabProps[] = [
  { label: 'root', external: false, to: '/root' },
  { label: 'CGI', external: true, to: 'https://cgi.com' },
  { label: 'Rijkswaterstaat', external: true, to: 'https://rijkswaterstaat.nl', openInNewTab: true }
];

describe('NavBar Tests', function () {
  describe('Component Testing', () => {
    let navBar: ShallowWrapper<NavBarProps>;

    beforeAll(() => {
      navBar = shallow(
        <NavBar actionBarTitle='Title' activeTab={currentValue} onTabChange={onTabChange} tabs={tabs} />
      );
    });

    test('GIVEN currentValue=0 AND I change value THEN currentValue changes', () => {
      const tabs = navBar.find(Tabs);

      tabs.simulate('change', undefined, 1);

      expect(onTabChange).toHaveBeenCalledTimes(1);
      expect(onTabChange).toHaveBeenCalledWith(undefined, 1);
      expect(currentValue).toBe(1);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const navBar = shallow(
        <NavBar actionBarTitle='Title' activeTab={currentValue} onTabChange={onTabChange} tabs={tabs} />
      );
      expect(navBar).toMatchSnapshot();
    });
  });
});
