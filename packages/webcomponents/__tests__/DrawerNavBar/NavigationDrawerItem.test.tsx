import { NavigationDrawerItem } from '@DrawerNavBar/NavigationDrawerItem';
import MenuIcon from '@material-ui/icons/Menu';
import { toBeCalled } from '@rws-air/utils';
import { shallow } from 'enzyme';
import React from 'react';

describe('NavigationDrawerItem', () => {
  describe('Component Testing', () => {
    test('GIVEN props THEN renders with given data', () => {
      const mockClick = jest.fn();
      const navigationDrawerItem = shallow(
        <NavigationDrawerItem icon={<MenuIcon />} label='Menu!' onClick={mockClick} />
      );

      navigationDrawerItem.simulate('click');

      expect(navigationDrawerItem.find(MenuIcon).exists()).toBe(true);
      expect(navigationDrawerItem.text()).toBe('Menu!');
      toBeCalled(mockClick, 1);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const navigationDrawerItem = shallow(
        <NavigationDrawerItem icon={<MenuIcon />} label='Menu!' onClick={jest.fn()} />
      );
      expect(navigationDrawerItem).toMatchSnapshot();
    });
  });
});
