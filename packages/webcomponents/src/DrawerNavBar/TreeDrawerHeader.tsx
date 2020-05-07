import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import React, { memo } from 'react';
import { Else, If, Then, When } from 'react-if';
import { Tooltip } from '../Tooltip';
import { TreeDrawerProps } from './DrawerProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    treeDropdownGrid: {
      maxHeight: '1rem',
      marginTop: '-2.5rem'
    },
    treeSelector: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    treeDrawerCloseIcon: {
      marginRight: theme.spacing(1)
    },
    smallInfoButton: {
      width: '0.6em',
      height: '0.6em'
    },
    treeInfoButton: {
      paddingTop: 0,
      paddingBottom: 6
    },
    closeListItem: {
      justifyContent: 'flex-end'
    },
    divider: {
      backgroundColor: '#CCE1EB' // Dark Blue 20
    }
  })
);

export const TreeDrawerHeader = memo((treeDrawer: TreeDrawerProps) => {
  const classes = useStyles();

  return (
    <>
      <List>
        <ListItem
          button
          disableGutters={treeDrawer.open}
          onClick={treeDrawer.toggleDrawer}
          classes={{
            root: clsx({ [classes.closeListItem]: treeDrawer.open })
          }}
        >
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
            alignContent='stretch'
            wrap='nowrap'
            spacing={0}
          >
            <When condition={treeDrawer.open}>
              <Grid item xs={1} />
              <Grid item xs={8} classes={{ root: classes.treeDropdownGrid }}>
                <ListItemText
                  disableTypography
                  primary={
                    <FormControl className={classes.treeSelector} size='small'>
                      <Select
                        value={treeDrawer.currentDropdownValue}
                        onChange={(event) => {
                          event.preventDefault();
                          treeDrawer.hanbdleDropdownChange(event);
                          event.stopPropagation();
                        }}
                        onClose={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                        }}
                        onOpen={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                        }}
                        fullWidth
                        displayEmpty
                        disableUnderline
                        MenuProps={{
                          getContentAnchorEl: null,
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center'
                          },
                          transformOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                          },
                          elevation: 2
                        }}
                        renderValue={(value) => <b>{value as string}</b>}
                      >
                        {treeDrawer.dropdownValues.map(({ value, label }, index) => (
                          <MenuItem key={index} value={value}>
                            {label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  }
                />
              </Grid>
              <Grid item xs={1}>
                <Tooltip title={treeDrawer.tooltipText}>
                  <IconButton color='primary' size='small' classes={{ root: classes.treeInfoButton }}>
                    <InfoIcon className={classes.smallInfoButton} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </When>
            <Grid item xs={1} classes={{ root: classes.treeDrawerCloseIcon }}>
              <ListItemIcon>
                <If condition={treeDrawer.open}>
                  <Then>
                    <ArrowBackIcon color='primary' />
                  </Then>
                  <Else>
                    <ArrowForward color='primary' />
                  </Else>
                </If>
              </ListItemIcon>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider classes={{ root: classes.divider }} />
    </>
  );
});
