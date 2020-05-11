import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { memo } from 'react';
import { When } from 'react-if';
import { DetailsPane } from './DetailsPane';
import { TreeAndNavProps, TreeDrawerComponentProps } from './DrawerProps';
import { ResizableDivider } from './ResizeDivider';
import { TreeDrawerHeader } from './TreeDrawerHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    treeDrawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    treeDrawerOpen: {
      width: ({ treeDrawer }: TreeAndNavProps) => treeDrawer.width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    treeDrawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    drawerPaper: {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(6)
      }
    },
    treeDrawerPaper: {
      paddingRight: ({ treeDrawer }: TreeAndNavProps) => theme.spacing(treeDrawer.open ? 1.2 : 0),
      left: ({ navigationDrawer }: TreeAndNavProps) =>
        navigationDrawer.open ? navigationDrawer.width + 2 : theme.spacing(7) + 2,
      [theme.breakpoints.up('sm')]: {
        left: ({ navigationDrawer }: TreeAndNavProps) =>
          navigationDrawer.open ? navigationDrawer.width + 2 : theme.spacing(9) + 2
      }
    }
  })
);

export const TreeDrawer = memo(
  ({
    treeDrawer,
    navigationDrawer,
    onMouseDown,
    onTouchStart,
    ResizableDividerProps,
    ...props
  }: TreeDrawerComponentProps) => {
    const classes = useStyles({ treeDrawer, navigationDrawer });

    return (
      <>
        <DetailsPane treeDrawer={treeDrawer} navigationDrawer={navigationDrawer} />
        <Drawer
          {...props}
          variant='permanent'
          // Selector that can be used by the resizable divider to determine size for spacing of the divider
          data-selector='tree-drawer'
          className={clsx(classes.treeDrawer, {
            [classes.treeDrawerOpen]: treeDrawer.open,
            [classes.treeDrawerClose]: !treeDrawer.open
          })}
          classes={{
            paper: clsx(classes.drawerPaper, classes.treeDrawerPaper, {
              [classes.treeDrawerOpen]: treeDrawer.open,
              [classes.treeDrawerClose]: !treeDrawer.open
            })
          }}
        >
          <TreeDrawerHeader {...treeDrawer} />
          <ResizableDivider
            treeDrawer={treeDrawer}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            {...ResizableDividerProps}
          />
          <When condition={treeDrawer.open}>
            <Box component='div' {...treeDrawer.TreeContentBoxProps}>
              {treeDrawer.content}
            </Box>
          </When>
        </Drawer>
      </>
    );
  }
);
