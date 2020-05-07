import { NavigationHeader } from '@DrawerNavBar/NavigationHeader';
import { drawerNavBarProps, navigationDrawerProps, tabs, treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { shallow } from 'enzyme';
import React from 'react';

describe('NavigationHeader', () => {
  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const navigationHeader = shallow(
        <NavigationHeader
          navigationDrawer={navigationDrawerProps}
          treeDrawer={treeDrawerProps}
          activeTab={0}
          onTabChange={jest.fn()}
          tabs={tabs}
        />
      );
      expect(navigationHeader).toMatchSnapshot();
    });

    test('Optional Props', () => {
      const navigationHeader = shallow(<NavigationHeader {...drawerNavBarProps} />);
      expect(navigationHeader).toMatchSnapshot();
    });
  });
});
