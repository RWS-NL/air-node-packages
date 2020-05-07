import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import {
  DrawerItem,
  DrawerNavBar,
  DrawerNavBarProps,
  DropdownValue,
  LinkTabProps,
  NavigationDrawerProps,
  TreeDrawerProps
} from '@rws-air/webcomponents';
import throttle from 'lodash.throttle';
import React, { FC, useMemo, useState } from 'react';

const treeDrawerItems: DrawerItem[] = [
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

const navigationDrawerItems: DrawerItem[] = [
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

const tabs: LinkTabProps[] = [
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

const boomTypes: DropdownValue[] = [
  { value: 'Functionele objectenboom', label: 'Functionele objectenboom' },
  { value: 'Fysieke objectenboom', label: 'Fysieke objectenboom' },
  { value: 'Documentenboom', label: 'Documentenboom' },
  { value: 'Functionele relatieboom', label: 'Functionele relatieboom' },
  { value: 'Fysieke relatieboom', label: 'Fysieke relatieboom' },
  { value: 'Hybride boom', label: 'Hybride boom' }
];

const Home: FC = () => {
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
  const [treeDrawerOpen, setTreeDrawerOpen] = useState(false);
  const [navigationDrawerWidth] = useState(240);
  const [treeDrawerWidth, setTreeDrawerWidth] = useState(400);
  const [activeTab, setActiveTab] = useState(1);

  const [currentBoomType, setCurrentBoomType] = React.useState('Functionele objectenboom');
  const handleBoomChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) =>
    setCurrentBoomType(event.target.value as string);

  const handleToggleNavigationDrawer = () => {
    setNavigationDrawerOpen(!navigationDrawerOpen);
  };

  const handleToggleTreeDrawer = () => {
    setTreeDrawerOpen(!treeDrawerOpen);
  };

  const handleDragTreeBorder = throttle(
    (_, value: unknown) => {
      setTreeDrawerWidth(value as number);
    },
    10,
    { leading: true, trailing: true }
  );

  const navigationDrawerProps: NavigationDrawerProps = {
    open: navigationDrawerOpen,
    width: navigationDrawerWidth,
    toggleDrawer: handleToggleNavigationDrawer,
    items: navigationDrawerItems
  };

  const treeDrawerProps: TreeDrawerProps = {
    open: treeDrawerOpen,
    width: treeDrawerWidth,
    minWidth: 400,
    tooltipText: 'Hier kunt u andere type bomen selecteren. Druk op het menu links van deze knop en selecteer dan uw gewenste boom type.',
    toggleDrawer: handleToggleTreeDrawer,
    currentDropdownValue: currentBoomType,
    dropdownValues: boomTypes,
    hanbdleDropdownChange: handleBoomChange,
    content: useMemo(
      () => (
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
      []
    ),
    onBorderDrag: handleDragTreeBorder
  };

  const drawerNavBarProps: DrawerNavBarProps = {
    treeDrawer: treeDrawerProps,
    navigationDrawer: navigationDrawerProps,
    tabs,
    activeTab,
    onTabChange: (_, value) => setActiveTab(value)
  };

  return (
    <DrawerNavBar {...drawerNavBarProps}>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
        velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
        lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
        ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
    </DrawerNavBar>
  );
};

export default Home;
