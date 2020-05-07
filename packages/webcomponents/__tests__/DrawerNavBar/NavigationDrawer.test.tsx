import { NavigationDrawerProps } from '@DrawerNavBar/DrawerProps';
import { NavigationDrawer } from '@DrawerNavBar/NavigationDrawer';
import { NavigationDrawerItem } from '@DrawerNavBar/NavigationDrawerItem';
import { navigationDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

describe('NavigationDrawer', () => {
  describe('Component Testing', () => {
    let navDrawer: ShallowWrapper<NavigationDrawerProps>;

    beforeAll(() => {
      navDrawer = shallow(<NavigationDrawer {...navigationDrawerProps} />);
    });

    test('GIVEN items THEN renders ListItem for each', () => {
      expect(navDrawer.find(NavigationDrawerItem)).toHaveLength(navigationDrawerProps.items.length);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const navigationDrawer = shallow(
        <NavigationDrawer
          open={navigationDrawerProps.open}
          items={navigationDrawerProps.items}
          width={navigationDrawerProps.width}
          toggleDrawer={navigationDrawerProps.toggleDrawer}
        />
      );
      expect(navigationDrawer).toMatchSnapshot();
    });

    test('Optional Props', () => {
      const navigationDrawer = shallow(<NavigationDrawer {...navigationDrawerProps} />);
      expect(navigationDrawer).toMatchSnapshot();
    });
  });
});
