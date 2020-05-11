import Divider, { DividerProps as MDividerProps } from '@material-ui/core/Divider';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { stringify } from 'flatted';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { TreeDrawerComponentProps } from './DrawerProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resizeDivider: {
      cursor: 'col-resize',
      width: theme.spacing(0.5),
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#999999',
      '&:hover': {
        backgroundColor: '#696969'
      },

      left: ({ treeDrawer, treeDrawerElement }: StyledProps) => {
        if (treeDrawerElement === null)
          treeDrawerElement = document.querySelector('[data-selector="tree-drawer"] > div');

        if (treeDrawerElement !== null && treeDrawerElement.scrollHeight > treeDrawerElement.clientHeight) {
          return `calc(${treeDrawer.width}px - ${theme.spacing(1.5)}px)`;
        }
        return `calc(${treeDrawer.width}px + ${theme.spacing(0.5)}px)`;
      }
    }
  })
);

type StyledProps = Pick<ResizeDividerProps, 'treeDrawer'> & {
  treeDrawerElement: Element | null;
};

export type ResizeDividerProps = Omit<TreeDrawerComponentProps, 'navigationDrawer'> & MDividerProps;

export const ResizableDivider = memo(
  ({ treeDrawer, onMouseDown, onTouchStart, ...props }: ResizeDividerProps) => {
    useWindowResize();
    const treeDrawerElement = useCallback(() => document.querySelector('[data-selector="tree-drawer"] > div'), []);
    const classes = useStyles({
      treeDrawer,
      treeDrawerElement: treeDrawerElement()
    });

    return (
      <Divider
        {...props}
        data-qa='draggable-divider'
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        classes={{ root: classes.resizeDivider }}
        orientation='vertical'
        draggable
        absolute
        light
      />
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.treeDrawer.open !== nextProps.treeDrawer.open) return false;
    if (prevProps.treeDrawer.width !== nextProps.treeDrawer.width) return false;
    if (stringify(prevProps.treeDrawer) !== stringify(nextProps.treeDrawer)) return false;

    return true;
  }
);

function useWindowResize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? document.querySelector('[data-selector="tree-drawer"] > div')?.scrollHeight : undefined,
      height: isClient ? document.querySelector('[data-selector="tree-drawer"] > div')?.clientHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
