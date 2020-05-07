import { TreeDrawerHeader, TreeDrawerHeaderDropdown } from '@DrawerNavBar/TreeDrawerHeader';
import { MenuItem, Select } from '@material-ui/core';
import { mockHandleBoomChange, treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { createEvent, toBeCalled } from '@rws-air/utils';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

describe('TreeDrawerHeader', () => {
  describe('Component Testing', () => {
    let treeDrawerHeaderDropdown: ShallowWrapper;

    const mockStopPropagation = jest.fn();
    const mockPreventDefault = jest.fn();

    const dummyEvent = createEvent('TWO', { stopPropagation: mockStopPropagation, preventDefault: mockPreventDefault });

    beforeAll(() => {
      treeDrawerHeaderDropdown = shallow(<TreeDrawerHeaderDropdown {...treeDrawerProps} />);
    });
    test('GIVEN change on Select THEN triggers change from props', () => {
      const selectMenu = treeDrawerHeaderDropdown.find(Select);

      selectMenu.simulate('change', dummyEvent);

      toBeCalled(mockHandleBoomChange, 1, dummyEvent);
    });

    test('GIVEN props THEN renders MenuItems', () => {
      const menuItems = treeDrawerHeaderDropdown.find(MenuItem);

      expect(menuItems).toHaveLength(treeDrawerProps.dropdownValues.length);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const treeDrawerHeader = shallow(<TreeDrawerHeader {...treeDrawerProps} />);
      expect(treeDrawerHeader).toMatchSnapshot();
    });
  });
});
