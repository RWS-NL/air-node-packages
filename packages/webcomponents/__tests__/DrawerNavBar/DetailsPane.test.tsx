import { DetailsPane } from '@DrawerNavBar/DetailsPane';
import { NavigationDrawerProps, TreeDrawerProps } from '@DrawerNavBar/DrawerProps';
import Popper from '@material-ui/core/Popper';
import { navigationDrawerProps, treeDrawerProps } from '@Resource/commonDrawerNavBarProps';
import { mergeObjects } from '@rws-air/utils';
import { shallow } from 'enzyme';
import React from 'react';

function modifyProps<T extends TreeDrawerProps | NavigationDrawerProps>(
  baseObj: T,
  open: boolean,
  extraModifications?: Partial<T>
): T {
  return mergeObjects(baseObj, { extraModifications, open });
}

function getModifiers(
  treeOpen: boolean,
  navOpen: boolean,
  extraModifications?: Partial<TreeDrawerProps | NavigationDrawerProps>
) {
  return shallow(
    <DetailsPane
      treeDrawer={modifyProps(treeDrawerProps, treeOpen, extraModifications)}
      navigationDrawer={modifyProps(navigationDrawerProps, navOpen, extraModifications)}
    />
  )
    .find(Popper)
    .props().modifiers as PopperModifiers;
}

describe('DetailsPane', () => {
  describe('Component Testing', () => {
    test('GIVEN drawers both open THEN offset is width of drawers', () => {
      const modifiers = getModifiers(true, true);
      expect(modifiers.offset.offset).toBe('660px, -95.5vh');
    });

    test('GIVEN only treeDrawer open THEN offset is width of tree + spacing(spacer) + 20', () => {
      const modifiers = getModifiers(true, false);
      expect(modifiers.offset.offset).toBe('492px, -95.5vh');
    });

    test('GIVEN only navigationDrawer open THEN offset is width of nav + spacing(spacer) + 20', () => {
      const modifiers = getModifiers(false, true);
      expect(modifiers.offset.offset).toBe('322px, -95.5vh');
    });

    test('GIVEN all drawers close THEN offset is (spacing(spacer) * 2) + 10', () => {
      const modifiers = getModifiers(false, false);
      expect(modifiers.offset.offset).toBe('154px, -95.5vh');
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const detailsPane = shallow(
        <DetailsPane treeDrawer={treeDrawerProps} navigationDrawer={navigationDrawerProps} />
      );
      expect(detailsPane).toMatchSnapshot();
    });
  });
});

interface PopperModifiers {
  offset: {
    enabled: true;
    offset: string;
  };
}
