import { ResizableDivider } from '@DrawerNavBar/ResizeDivider';
import { treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { findShallowByDataQa, toBeCalled } from '@rws-air/utils';
import { shallow } from 'enzyme';
import React from 'react';

const mockOnMouseDown = jest.fn();
const mockOnTouchStart = jest.fn();

describe('ResizableDivider', () => {
  describe('Component Testing', () => {
    const resizableDivider = shallow(
      <ResizableDivider treeDrawer={treeDrawerProps} onMouseDown={mockOnMouseDown} onTouchStart={mockOnTouchStart} />
    );

    test('GIVEN mouseDown event on draggable divider THEN triggers function', () => {
      findShallowByDataQa(resizableDivider, 'draggable-divider').simulate('mousedown');

      toBeCalled(mockOnMouseDown, 1);
    });

    test('GIVEN touchStart event on draggable divider THEN triggers function', () => {
      findShallowByDataQa(resizableDivider, 'draggable-divider').simulate('touchstart');

      toBeCalled(mockOnTouchStart, 1);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const resizableDivider = shallow(
        <ResizableDivider treeDrawer={treeDrawerProps} onMouseDown={mockOnMouseDown} onTouchStart={mockOnTouchStart} />
      );
      expect(resizableDivider).toMatchSnapshot();
    });

    test('Optional Props', () => {
      const resizableDivider = shallow(
        <ResizableDivider
          treeDrawer={treeDrawerProps}
          onMouseDown={mockOnMouseDown}
          onTouchStart={mockOnTouchStart}
          data-qa='testing'
          id='draggable-divider'
        />
      );
      expect(resizableDivider).toMatchSnapshot();
    });
  });
});
