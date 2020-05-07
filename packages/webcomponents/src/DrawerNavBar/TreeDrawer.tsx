import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { memo } from 'react';
import { StyledProps } from './DrawerProps';
import { TreeDrawerHeader } from './TreeDrawerHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    treeDrawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    treeDrawerOpen: {
      width: ({ treeDrawer }: StyledProps) => treeDrawer.width,
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
      paddingRight: ({ treeDrawer }: StyledProps) => theme.spacing(treeDrawer.open ? 1 : 0),
      left: ({ navigationDrawer }: StyledProps) =>
        navigationDrawer.open ? navigationDrawer.width + 2 : theme.spacing(7) + 2,
      [theme.breakpoints.up('sm')]: {
        left: ({ navigationDrawer }: StyledProps) =>
          navigationDrawer.open ? navigationDrawer.width + 2 : theme.spacing(9) + 2
      }
    },
    resizeDivider: {
      cursor: 'ew-resize',
      width: theme.spacing(1),
      zIndex: theme.zIndex.drawer + 1,
      left: ({ treeDrawer }: StyledProps) => `calc(${treeDrawer.width}px + ${theme.spacing(0.5)}px)`
    }
  })
);

export interface TreeDrawerComponentProps extends StyledProps {
  onMouseDown: (event: React.MouseEvent<HTMLHRElement>) => void;
  onTouchStart: (event: React.TouchEvent<HTMLHRElement>) => void;
}

export const TreeDrawer = memo(
  ({ treeDrawer, navigationDrawer, onMouseDown, onTouchStart, ...props }: TreeDrawerComponentProps) => {
    const classes = useStyles({ treeDrawer, navigationDrawer });

    return (
      <Drawer
        {...props}
        variant='permanent'
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
        <Divider
          data-qa='draggable-divider'
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          classes={{ root: classes.resizeDivider }}
          orientation='vertical'
          draggable
          absolute
          light
        />
        <Box component='div' {...treeDrawer.ContentBoxProps}>
          {treeDrawer.content}
        </Box>
      </Drawer>
    );
  }
);
