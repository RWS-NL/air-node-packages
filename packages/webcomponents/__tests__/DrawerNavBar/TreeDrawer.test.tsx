import { TreeDrawer, TreeDrawerComponentProps } from '@DrawerNavBar/TreeDrawer';
import { TreeDrawerHeader } from '@DrawerNavBar/TreeDrawerHeader';
import { ListItem } from '@material-ui/core';
import { navigationDrawerProps, treeDrawerItems, treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { findShallowByDataQa, toBeCalled } from '@rws-air/utils';
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

    test('GIVEN mouseDown event on draggable divider THEN triggers function', () => {
      findShallowByDataQa(treeDrawer, 'draggable-divider').simulate('mousedown');

      toBeCalled(mockOnMouseDown, 1);
    });

    test('GIVEN touchStart event on draggable divider THEN triggers function', () => {
      findShallowByDataQa(treeDrawer, 'draggable-divider').simulate('touchstart');

      toBeCalled(mockOnTouchStart, 1);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const treeDrawer = shallow(<TreeDrawer {...props} />);
      expect(treeDrawer).toMatchSnapshot();
    });
  });
});
