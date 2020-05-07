import { ListItem } from '@material-ui/core';
import React, { memo } from 'react';
import { DrawerItem } from './DrawerProps';

export const NavigationDrawerItem = memo(
  ({ icon, label, onClick, ...props }: DrawerItem) => (
    <ListItem button onClick={onClick} {...props}>
      {icon}
      {label}
    </ListItem>
  ),
  () => true
);
