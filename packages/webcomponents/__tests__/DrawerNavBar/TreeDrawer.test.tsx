import { TreeDrawerComponentProps } from '@DrawerNavBar/DrawerProps';
import { TreeDrawer } from '@DrawerNavBar/TreeDrawer';
import { TreeDrawerHeader } from '@DrawerNavBar/TreeDrawerHeader';
import { ListItem } from '@material-ui/core';
import { navigationDrawerProps, treeDrawerItems, treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { shallow } from 'enzyme';
import React from 'react';

const mockOnMouseDown = jest.fn();
const mockOnTouchStart = jest.fn();

const props: TreeDrawerComponentProps = {
  treeDrawer: treeDrawerProps,
  navigationDrawer: navigationDrawerProps,
  onMouseDown: mockOnMouseDown,
  onTouchStart: mockOnTouchStart
};

describe('TreeDrawer', () => {
  describe('Component Testing', () => {
    const treeDrawer = shallow(<TreeDrawer {...props} />);
    test('GIVEN TreeDrawer THEN contains TreeDrawerHeader', () => {
      expect(treeDrawer.find(TreeDrawerHeader).exists()).toBe(true);
    });

    test('GIVEN TreeDrawer THEN contains ListItems', () => {
      expect(treeDrawer.find(ListItem)).toHaveLength(treeDrawerItems.length);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const treeDrawer = shallow(<TreeDrawer {...props} />);
      expect(treeDrawer).toMatchSnapshot();
    });
  });
});
