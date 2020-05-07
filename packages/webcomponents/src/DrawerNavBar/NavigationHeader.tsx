import MUIAppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import React, { memo } from 'react';
import { LinkTab } from '../LinkTab';
import { DrawerNavBarProps } from './DrawerProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: theme.shadows[1],
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    hide: {
      display: 'none'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    appBarResize: {
      minHeight: theme.spacing(6),
      maxHeight: theme.spacing(6),
      height: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        minHeight: theme.spacing(6),
        maxHeight: theme.spacing(6),
        height: theme.spacing(6)
      }
    },
    tabsBar: {
      justifyContent: 'flex-start',
      paddingLeft: 0
    }
  })
);

export const NavigationHeader = memo(
  ({
    navigationDrawer,
    treeDrawer,
    activeTab,
    onTabChange,
    tabs,
    TabsProps,
    AppBarProps,
    ToolbarProps,
    ...props
  }: DrawerNavBarProps) => {
    const classes = useStyles();

    return (
      <MUIAppBar
        {...props}
        {...AppBarProps}
        position='fixed'
        color='secondary'
        className={clsx(classes.appBar, classes.appBarResize, {
          [classes.appBarShift]: navigationDrawer.open || treeDrawer.open
        })}
      >
        <Toolbar {...ToolbarProps} classes={{ root: clsx(classes.appBarResize, classes.tabsBar) }} variant='dense'>
          <Tabs
            {...TabsProps}
            variant='standard'
            value={activeTab}
            onChange={onTabChange}
            classes={{ indicator: classes.hide }}
          >
            {tabs.map((tab, index) => (
              <LinkTab key={index} label={tab.label} to={tab.to} data-qa={`link-tab-${index}`} />
            ))}
          </Tabs>
        </Toolbar>
      </MUIAppBar>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.navigationDrawer.open !== nextProps.navigationDrawer.open) return false;
    if (prevProps.treeDrawer.open !== nextProps.treeDrawer.open) return false;
    if (prevProps.activeTab !== nextProps.activeTab) return false;
    if (JSON.stringify(prevProps.tabs) !== JSON.stringify(nextProps.tabs)) return false;

    return true;
  }
);
