import { DrawerNavBar } from '@DrawerNavBar/index';
import { NavigationDrawer } from '@DrawerNavBar/NavigationDrawer';
import { NavigationHeader } from '@DrawerNavBar/NavigationHeader';
import { TreeDrawer } from '@DrawerNavBar/TreeDrawer';
import { drawerNavBarProps, navigationDrawerProps, tabs, treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

describe('NavigationDrawer', () => {
  describe('Component Testing', () => {
    let drawerNavBar: ShallowWrapper;

    beforeAll(() => {
      drawerNavBar = shallow(
        <DrawerNavBar {...drawerNavBarProps}>
          <p>TEST TEXT</p>
        </DrawerNavBar>
      );
    });

    test('GIVEN shallow render THEN contains sub-elements', () => {
      expect(drawerNavBar.find(NavigationHeader).exists()).toBe(true);
      expect(drawerNavBar.find(TreeDrawer).exists()).toBe(true);
      expect(drawerNavBar.find(NavigationDrawer).exists()).toBe(true);
      expect(drawerNavBar.find('p').text()).toBe('TEST TEXT');
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const navigationDrawer = shallow(
        <DrawerNavBar
          treeDrawer={treeDrawerProps}
          navigationDrawer={navigationDrawerProps}
          tabs={tabs}
          onTabChange={jest.fn()}
          activeTab={0}
        />
      );
      expect(navigationDrawer).toMatchSnapshot();
    });

    test('Passed as spread syntax', () => {
      const navigationDrawer = shallow(<DrawerNavBar {...drawerNavBarProps} />);
      expect(navigationDrawer).toMatchSnapshot();
    });
  });
});
