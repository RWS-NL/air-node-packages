import {
  DrawerItem,
  DrawerNavBarProps,
  DropdownValue,
  NavigationDrawerProps,
  TreeDrawerProps
} from '@DrawerNavBar/DrawerProps';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import { LinkTabProps } from '@src/LinkTab';
import React from 'react';

export const mockDropdownValues: DropdownValue[] = [
  { value: 'ONE', label: 'ONE' },
  { value: 'TWO', label: 'TWO' },
  { value: 'THREE', label: 'THREE' },
  { value: 'FOUR', label: 'FOUR' },
  { value: 'FIVE', label: 'FIVE' },
  { value: 'SIX', label: 'SIX' }
];

export let navigationDrawerOpen = true;
export const mockHandleToggleNavigationDrawer = jest.fn().mockImplementation(() => {
  navigationDrawerOpen = !navigationDrawerOpen;
});

export let mockTreeDrawerOpen = true;
export const mockHandleToggleTreeDrawer = jest.fn().mockImplementation(() => {
  mockTreeDrawerOpen = !mockTreeDrawerOpen;
});

export const mockHandleBoomChange = jest
  .fn()
  .mockImplementation((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const indexOfCurrentValue = mockDropdownValues.indexOf(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      mockDropdownValues.find((v) => v.value === event.target.value)!
    );
    let nextEntry = indexOfCurrentValue + 1;

    if (nextEntry > mockDropdownValues.length) nextEntry = 0;

    treeDrawerProps.currentDropdownValue = mockDropdownValues[nextEntry].value;
  });

export const treeDrawerItems: DrawerItem[] = [
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Drafts' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Inbox' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  }
];

export const navigationDrawerItems: DrawerItem[] = [
  {
    icon: (
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Send' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  },
  {
    icon: (
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
    ),
    label: <ListItemText primary='Star' primaryTypographyProps={{ variant: 'body2', color: 'primary' }} />
  }
];

export const tabs: LinkTabProps[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Projectenoverzicht',
    to: '/'
  },
  {
    label: 'Contact',
    to: '/'
  }
];

export const navigationDrawerProps: NavigationDrawerProps = {
  open: navigationDrawerOpen,
  width: 240,
  toggleDrawer: mockHandleToggleNavigationDrawer,
  items: navigationDrawerItems
};

export const treeDrawerProps: TreeDrawerProps = {
  open: mockTreeDrawerOpen,
  width: 240,
  minWidth: 400,
  tooltipText:
    'Hier kunt u andere type bomen selecteren. Druk op het menu links van deze knop en selecteer dan uw gewenste boom type.',
  toggleDrawer: mockHandleToggleTreeDrawer,
  currentDropdownValue: mockDropdownValues[0].value,
  dropdownValues: mockDropdownValues,
  hanbdleDropdownChange: mockHandleBoomChange,
  content: (
    <Paper elevation={2}>
      <List>
        {treeDrawerItems.map(({ icon, label }, index) => (
          <ListItem button key={index}>
            {icon}
            {label}
          </ListItem>
        ))}
      </List>
    </Paper>
  ),
  onBorderDrag: jest.fn()
};

export const drawerNavBarProps: DrawerNavBarProps = {
  treeDrawer: treeDrawerProps,
  navigationDrawer: navigationDrawerProps,
  tabs,
  activeTab: 0,
  onTabChange: jest.fn()
};
