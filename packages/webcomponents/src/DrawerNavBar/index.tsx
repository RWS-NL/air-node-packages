import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { memo, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { DrawerNavBarProps } from './DrawerProps';
import { NavigationDrawer } from './NavigationDrawer';
import { NavigationHeader } from './NavigationHeader';
import { TreeDrawer } from './TreeDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    resizeCursor: {
      cursor: 'col-resize !important'
    }
  })
);

/**
 * Constructs a DrawerNavbar using pre-defined Rijkswaterstaat styling
 * @remark a DrawerNavbar present a navigation AppBar along with a double drawer of subnavigation and items in a tree form.
 * @example
 * ```jsx
 * const treeDrawerItems: DrawerItem[] = [
 *   {
 *     icon: (
 *       <ListItemIcon>
 *         <InboxIcon />
 *       </ListItemIcon>
 *     ),
 *     label: (
 *       <ListItemText
 *         primary="Inbox"
 *         primaryTypographyProps={{ variant: "body2", color: "primary" }}
 *       />
 *     )
 *   },
 *   {
 *     icon: (
 *       <ListItemIcon>
 *         <DraftsIcon />
 *       </ListItemIcon>
 *     ),
 *     label: (
 *       <ListItemText
 *         primary="Drafts"
 *         primaryTypographyProps={{ variant: "body2", color: "primary" }}
 *       />
 *     )
 *   }
 * ];
 *
 * const navigationDrawerItems: DrawerItem[] = [
 *   {
 *     icon: (
 *       <ListItemIcon>
 *         <SendIcon />
 *       </ListItemIcon>
 *     ),
 *     label: (
 *       <ListItemText
 *         primary="Send"
 *         primaryTypographyProps={{ variant: "body2", color: "primary" }}
 *       />
 *     )
 *   },
 *   {
 *     icon: (
 *       <ListItemIcon>
 *         <StarBorder />
 *       </ListItemIcon>
 *     ),
 *     label: (
 *       <ListItemText
 *         primary="Star"
 *         primaryTypographyProps={{ variant: "body2", color: "primary" }}
 *       />
 *     )
 *   }
 * ];
 *
 * const tabs: LinkTabProps[] = [
 *   {
 *     label: "Home",
 *     to: "/"
 *   },
 *   {
 *     label: "Projectenoverzicht",
 *     to: "/"
 *   },
 *   {
 *     label: "Contact",
 *     to: "/"
 *   }
 * ];
 *
 * const boomTypes: DropdownValue[] = [
 *   { value: 'Functionele objectenboom', label: 'Functionele objectenboom' },
 *   { value: 'Fysieke objectenboom', label: 'Fysieke objectenboom' },
 *   { value: 'Documentenboom', label: 'Documentenboom' },
 *   { value: 'Functionele relatieboom', label: 'Functionele relatieboom' },
 *   { value: 'Fysieke relatieboom', label: 'Fysieke relatieboom' },
 *   { value: 'Hybride boom', label: 'Hybride boom' }
 * ];
 *
 * // In a Functional React component:
 * const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
 * const [treeDrawerOpen, setTreeDrawerOpen] = useState(false);
 * const [navigationDrawerWidth] = useState(240);
 * const [treeDrawerWidth] = useState(400);
 * const [activeTab, setActiveTab] = useState(1);
 *
 * const [currentBoomType, setCurrentBoomType] = React.useState('Functionele objectenboom');
 * const handleBoomChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) =>
 *  setCurrentBoomType(event.target.value as string);
 *
 * const handleToggleNavigationDrawer = () => {
 *   setNavigationDrawerOpen(!navigationDrawerOpen);
 * };
 *
 * const handleToggleTreeDrawer = () => {
 *   setTreeDrawerOpen(!treeDrawerOpen);
 * };
 *
 * // Using lodash.throttle
 * const handleDragTreeBorder = throttle(
 *   (_, value: unknown) => {
 *     setTreeDrawerWidth(value as number);
 *   },
 *   10,
 *   { leading: true, trailing: true }
 * );
 *
 * const navigationDrawerProps: DrawerProps = {
 *   open: navigationDrawerOpen,
 *   width: navigationDrawerWidth,
 *   toggleDrawer: handleToggleNavigationDrawer,
 *   items: navigationDrawerItems
 * };
 *
 * const treeDrawerProps: TreeDrawerProps = {
 *   open: treeDrawerOpen,
 *   width: treeDrawerWidth,
 *   minWidth: 400,
 *   toggleDrawer: handleToggleTreeDrawer,
 *   currentDropdownValue: currentBoomType,
 *   dropdownValues: boomTypes,
 *   hanbdleDropdownChange: handleBoomChange,
 *   // Utilize useMemo or another memoization function to ensure this doesn't re-render when resizing drawer
 *   content: useMemo(
 *     () => (
 *       <Paper elevation={2}>
 *         <List>
 *           {treeDrawerItems.map(({ icon, label }, index) => (
 *             <ListItem button key={index}>
 *               {icon}
 *               {label}
 *             </ListItem>
 *           ))}
 *         </List>
 *       </Paper>
 *     ),
 *     [] // Optionally pass props when it should re-render when dragging the treeDrawer
 *   ),
 *   onBorderDrag: handleDragTreeBorder
 * };
 *
 * const drawerNavBarProps: DrawerNavBarProps = {
 *   treeDrawer: treeDrawerProps,
 *   navigationDrawer: navigationDrawerProps,
 *   tabs,
 *   activeTab,
 *   onTabChange: (_, value) => setActiveTab(value)
 * };
 *
 * return (
 *   <DrawerNavBar {...drawerNavBarProps}>
 *     <Typography paragraph>Lorem ipsum dolor sit amet</Typography>
 *   </DrawerNavBar>
 * );
 * ```
 */
export const DrawerNavBar = memo(
  ({
    navigationDrawer,
    treeDrawer,
    AppBarProps,
    TabsProps,
    ToolbarProps,
    activeTab,
    onTabChange,
    tabs,
    children,
    ContentBoxProps,
    NavigationDrawerProps,
    NavigationDrawerItemProps,
    NavigationHeaderProps,
    ResizableDividerProps,
    TreeDrawerProps,
    ...props
  }: PropsWithChildren<DrawerNavBarProps>) => {
    const classes = useStyles({ navigationDrawer, treeDrawer });
    const [isDragging, setIsDragging] = useState(false);
    const [initialXPos, setInitialXPos] = useState<number | null>(null);

    // Triggered when the user starts dragging
    const handleDragStart = useCallback(
      (event: React.MouseEvent<HTMLHRElement, MouseEvent>, x: number) => {
        setIsDragging(true);
        setInitialXPos(x);

        if (isDragging && treeDrawer.onBorderDrag !== undefined) {
          treeDrawer.onBorderDrag(event as any, event.clientX);
        }

        event.stopPropagation();
        event.preventDefault();
      },
      [isDragging, treeDrawer]
    );

    // Triggered whenever the user stops dragging
    const handleDragEnd = useCallback((event: MouseEvent | TouchEvent) => {
      setIsDragging(false);

      event.stopPropagation();
      event.preventDefault();
    }, []);

    /**
     * This will handle the resizing of the treeDrawer by passing the data
     * to the treeDrawer's onBorderDrag function.
     * It also validates that the new width is larger than the specified minimnum width
     * and that the new value has a delta of 5 compared to the previous width - the latter being
     * for performance gains.
     */
    const handleResize = useCallback(
      (event: React.MouseEvent<HTMLHRElement, MouseEvent> | React.TouchEvent<HTMLHRElement>, deltaX: number) => {
        if (treeDrawer.onBorderDrag !== undefined) {
          const newWidth = treeDrawer.width + deltaX;
          if (newWidth >= treeDrawer.minWidth && (deltaX >= 5 || deltaX <= -5)) {
            treeDrawer.onBorderDrag(event, newWidth);
          }
        }

        return deltaX;
      },
      [treeDrawer]
    );

    // Triggers when the user is moving the draggable divider
    const handleDragMove = useCallback(
      (event: React.MouseEvent<HTMLHRElement, MouseEvent> | React.TouchEvent<HTMLHRElement>, x: number) => {
        if (!isDragging) return;

        const initDelta = x - (initialXPos ?? 0);
        const resultData = handleResize(event, initDelta);

        if (resultData + initDelta !== 0) {
          const expectedDelta = resultData === initDelta;
          setInitialXPos(x + (expectedDelta ? 0 : resultData));
        }

        event.stopPropagation();
        event.preventDefault();
      },
      [handleResize, initialXPos, isDragging]
    );

    // Handles Mouse Move events. This is continiously handled for as long as you're moving the draggable divider on a desktop
    const onMouseMove = useCallback(
      (event: React.MouseEvent<HTMLHRElement, MouseEvent>) => {
        handleDragMove(event, event.pageX);
      },
      [handleDragMove]
    );

    // Handles Touch Move events. This is continiously
    // triggered for as long as you're moving the draggable divider on a mobile device
    const onTouchMove = useCallback(
      (event: React.TouchEvent<HTMLHRElement>) => {
        handleDragMove(event, event.touches[0].clientX);
      },
      [handleDragMove]
    );

    // Handles MouseDown events. This is triggered when clicking the draggable divider
    const onMouseDown = useCallback(
      (e: React.MouseEvent<HTMLHRElement, MouseEvent>) => {
        if (e.button !== 0) return;
        handleDragStart(e, e.pageX);
      },
      [handleDragStart]
    );

    // Handles Touch Start events. This is for mobile devices as they do not use the MouseDown event
    const onTouchStart = useCallback(
      (e: React.TouchEvent<HTMLHRElement>) => {
        handleDragStart((e as unknown) as React.MouseEvent<HTMLHRElement, MouseEvent>, e.touches[0].clientX);
      },
      [handleDragStart]
    );

    useEffect(() => {
      // Get access to the HTML element to globally change the cursor style while dragging
      const reactRootSelector = document.querySelector('html');

      // If the user is dragging we add events to the draggable divider to process that
      if (isDragging === true) {
        // Set the cursor to column resize mode
        if (reactRootSelector !== null) reactRootSelector.classList.add(classes.resizeCursor);

        window.addEventListener('mousemove', onMouseMove as any);
        window.addEventListener('touchmove', onTouchMove as any, {
          passive: false
        });
        window.addEventListener('mouseup', handleDragEnd as any);
        window.addEventListener('touchend', handleDragEnd, {
          passive: false
        });
      }

      // Whenever the user stops dragging we need to clean up events
      return () => {
        // Set the cursor to regular mode
        if (reactRootSelector !== null) reactRootSelector.classList.remove(classes.resizeCursor);

        window.removeEventListener('mousemove', onMouseMove as any);
        window.removeEventListener('touchmove', onTouchMove as any);
        window.removeEventListener('mouseup', handleDragEnd as any);
        window.removeEventListener('touchend', handleDragEnd as any);
      };
      // We disable eslint on this line because we specifically only want to re-trigger useEffect when dragging state changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging]);

    return (
      <Box component='div' display='flex' {...props}>
        <NavigationHeader
          navigationDrawer={navigationDrawer}
          treeDrawer={treeDrawer}
          AppBarProps={AppBarProps}
          TabsProps={TabsProps}
          ToolbarProps={ToolbarProps}
          activeTab={activeTab}
          onTabChange={onTabChange}
          tabs={tabs}
          {...NavigationHeaderProps}
        />
        <NavigationDrawer
          NavigationDrawerItemProps={NavigationDrawerItemProps}
          {...navigationDrawer}
          {...NavigationDrawerProps}
        />
        <TreeDrawer
          navigationDrawer={navigationDrawer}
          treeDrawer={treeDrawer}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          ResizableDividerProps={ResizableDividerProps}
          {...TreeDrawerProps}
        />

        {/* Start page content */}
        <Box component='main' className={classes.content} {...ContentBoxProps}>
          <Box component='div' className={classes.toolbar} />
          {children}
        </Box>
        {/* End page content */}
      </Box>
    );
  }
);

// Re-Export the typings so they are available on top-level export
export * from './DrawerProps';
export { ResizeDividerProps } from './ResizeDivider';
