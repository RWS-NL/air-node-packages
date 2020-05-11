import {
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
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
import clsx from 'clsx';
import throttle from 'lodash.throttle';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    detailsContent: {
      padding: theme.spacing(2)
    },
    virtualizedList: {
      margin: theme.spacing(1)
    },
    list: {
      margin: 0,
      padding: 0
    },
    treeContent: {
      paddingRight: theme.spacing(0.5),
      paddingLeft: theme.spacing(0.5)
    }
  })
);

const Home: FC = () => {
  const classes = useStyles();
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
  const [treeDrawerOpen, setTreeDrawerOpen] = useState(true);
  const [navigationDrawerWidth] = useState(240);
  const [treeDrawerWidth, setTreeDrawerWidth] = useState(400);
  const [activeTab, setActiveTab] = useState(1);
  const [detailsPaneOpen, setDetailsPaneOpen] = useState(false);

  const [currentBoomType, setCurrentBoomType] = React.useState('Functionele objectenboom');

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

  const handleToggleDetailsPane = useCallback(() => {
    setDetailsPaneOpen(!detailsPaneOpen);
  }, [detailsPaneOpen]);

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
    tooltipText:
      'Hier kunt u andere type bomen selecteren. Druk op het menu links van deze knop en selecteer dan uw gewenste boom type.',
    toggleDrawer: handleToggleTreeDrawer,
    currentDropdownValue: currentBoomType,
    dropdownValues: boomTypes,
    hanbdleDropdownChange: (event) => setCurrentBoomType(event.target.value as string),
    detailsPaneOpen,
    content: useMemo(
      () => (
        <>
          <Paper elevation={2}>
            <Virtuoso
              totalCount={treeDrawerItems.length}
              className={classes.virtualizedList}
              overscan={20}
              style={{ height: '80vh', width: '100%' }}
              ListContainer={({ listRef, style, className, children, ...props }: any) => {
                return (
                  <List {...props} ref={listRef} style={style} className={clsx(className, classes.list)}>
                    {children}
                  </List>
                );
              }}
              ItemContainer={({ children, ...props }) => {
                return (
                  <ListItem {...props} button style={{ margin: 0 }} onClick={handleToggleDetailsPane}>
                    {children}
                  </ListItem>
                );
              }}
              item={(index) => (
                <>
                  {treeDrawerItems[index].icon}
                  {treeDrawerItems[index].label}
                </>
              )}
            />
          </Paper>
        </>
      ),
      [classes.list, classes.virtualizedList, handleToggleDetailsPane]
    ),
    detailsPaneContent: useMemo(
      () => (
        <Typography classes={{ root: classes.detailsContent }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lectus ipsum. Sed rhoncus risus a
          hendrerit fringilla. Vivamus ultrices, neque a volutpat vulputate, nulla nibh accumsan magna, vitae accumsan
          velit arcu ac est. Fusce volutpat lacus non lorem commodo, eget viverra purus accumsan. Nulla commodo, eros
          vitae consequat blandit, nisl est accumsan purus, eget scelerisque magna erat nec sem. Mauris vehicula eu mi
          vitae posuere. Vivamus malesuada laoreet turpis sed vehicula. Fusce vitae magna vulputate, scelerisque elit
          in, luctus turpis. Nunc tempus enim ultrices vulputate aliquam. Morbi sit amet finibus augue. Mauris in erat
          nec quam efficitur laoreet. Integer pharetra accumsan viverra. Proin rutrum tempus magna, ac pharetra turpis
          congue eget. Fusce bibendum diam felis, at cursus nisl accumsan id. Donec quis convallis lectus. Sed
          pellentesque magna sem.
          <br />
          <br />
          Ut eu luctus est, vitae hendrerit enim. Sed sodales augue tortor, sed convallis ipsum euismod et. Vivamus
          aliquet mi in orci congue convallis. Donec feugiat, urna eu efficitur accumsan, eros dolor tincidunt ante, nec
          vulputate tortor diam quis leo. Donec ac nibh orci. Donec bibendum tortor eu enim venenatis, vitae posuere
          urna fringilla. Integer non nunc sit amet purus fringilla aliquet.
          <br />
          <br />
          Duis tincidunt hendrerit dignissim. Praesent eget ligula eros. Vivamus in magna non est lobortis dignissim
          sollicitudin eget turpis. Nulla posuere, mauris vel sollicitudin consectetur, nulla nisi eleifend est, ut
          feugiat quam urna ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nulla tellus justo, sagittis a facilisis sit amet, laoreet nec neque. Suspendisse tristique velit
          accumsan, sollicitudin ante non, mattis nibh. Nunc id diam turpis. In magna libero, consectetur non luctus
          non, porta vel ex.
        </Typography>
      ),
      [classes.detailsContent]
    ),
    onBorderDrag: handleDragTreeBorder,
    TreeContentBoxProps: {
      className: classes.treeContent
    }
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
