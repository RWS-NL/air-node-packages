import { createStyles, Fade, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import React, { memo, PropsWithChildren } from 'react';
import { TreeAndNavProps } from './DrawerProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: theme.spacing(60),
      minWidth: theme.spacing(60),
      width: theme.spacing(60),
      zIndex: theme.zIndex.drawer + 1
    }
  })
);

export const DetailsPane = memo(
  ({ treeDrawer, navigationDrawer }: PropsWithChildren<TreeAndNavProps>) => {
    const classes = useStyles({ treeDrawer, navigationDrawer });
    const theme = useTheme();

    const bodySelector = document.querySelector('body');

    // If there is no refObject just return null because we cannot render the details pane anyway
    if (!bodySelector) return null;

    const calculateLeftOffset = () => {
      const spacer = theme.breakpoints.down('sm') ? 9 : 7;

      if (treeDrawer.open === true && navigationDrawer.open === false)
        return treeDrawer.width + theme.spacing(spacer) + 20;
      if (treeDrawer.open === true && navigationDrawer.open === true)
        return treeDrawer.width + navigationDrawer.width + 20;
      if (treeDrawer.open === false && navigationDrawer.open === true)
        return navigationDrawer.width + theme.spacing(spacer) + 10;

      return theme.spacing(spacer) * 2 + 10;
    };

    return (
      <>
        <Popper
          className={classes.root}
          open={treeDrawer.detailsPaneOpen}
          anchorEl={bodySelector}
          placement='top-start'
          disablePortal
          transition
          modifiers={{
            offset: {
              enabled: true,
              offset: `${calculateLeftOffset()}px, -95.5vh`
            }
          }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={4}>{treeDrawer.detailsPaneContent}</Paper>
            </Fade>
          )}
        </Popper>
      </>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.treeDrawer.detailsPaneOpen !== nextProps.treeDrawer.detailsPaneOpen) return false;
    if (prevProps.treeDrawer.width !== nextProps.treeDrawer.width) return false;
    if (prevProps.treeDrawer.open !== nextProps.treeDrawer.open) return false;
    if (prevProps.navigationDrawer.open !== nextProps.navigationDrawer.open) return false;
    return true;
  }
);
