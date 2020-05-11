import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { stringify } from 'flatted';
import React, { memo } from 'react';
import { Else, If, Then } from 'react-if';
import { NavigationDrawerProps } from './DrawerProps';
import { NavigationDrawerItem } from './NavigationDrawerItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigationDrawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    navigationDrawerOpen: {
      width: ({ width }: Pick<NavigationDrawerProps, 'width'>) => width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    navigationDrawerClose: {
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
    divider: {
      backgroundColor: '#CCE1EB' // Dark Blue 20
    },
    closeListItem: {
      justifyContent: 'flex-end'
    },
    navgationDrawerCloseIcon: {
      marginRight: theme.spacing(2)
    }
  })
);

export const NavigationDrawer = memo(
  ({ open, items, width, toggleDrawer, NavigationDrawerItemProps, ...props }: NavigationDrawerProps) => {
    const classes = useStyles({ width });

    return (
      <Drawer
        {...props}
        variant='permanent'
        className={clsx(classes.navigationDrawer, {
          [classes.navigationDrawerOpen]: open,
          [classes.navigationDrawerClose]: !open
        })}
        classes={{
          paper: clsx(classes.drawerPaper, {
            [classes.navigationDrawerOpen]: open,
            [classes.navigationDrawerClose]: !open
          })
        }}
      >
        <List>
          <ListItem
            button
            disableGutters={open}
            onClick={toggleDrawer}
            classes={{
              root: clsx({ [classes.closeListItem]: open })
            }}
          >
            <Grid
              container
              direction='row'
              justify={open ? 'flex-end' : 'flex-start'}
              alignItems='center'
              wrap='nowrap'
              alignContent='stretch'
            >
              <Grid
                item
                xs={1}
                classes={{
                  root: clsx({
                    [classes.navgationDrawerCloseIcon]: open
                  })
                }}
              >
                <ListItemIcon>
                  <If condition={open}>
                    <Then>
                      <CloseIcon color='primary' />
                    </Then>
                    <Else>
                      <MenuIcon color='primary' />
                    </Else>
                  </If>
                </ListItemIcon>
              </Grid>
            </Grid>
          </ListItem>
        </List>

        <Divider classes={{ root: classes.divider }} />

        <List>
          {items.map(({ icon, label, onClick }, index) => (
            <NavigationDrawerItem
              key={index}
              icon={icon}
              label={label}
              onClick={onClick}
              {...NavigationDrawerItemProps}
            />
          ))}
        </List>
      </Drawer>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.open !== nextProps.open) return false;
    if (prevProps.items.length !== nextProps.items.length) return false;
    if (stringify(prevProps.items) !== stringify(nextProps.items)) return false;
    return true;
  }
);
