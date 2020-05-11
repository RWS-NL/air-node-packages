import {
  AppBarProps as MAppBarProps,
  BoxProps as MBoxProps,
  DividerProps as MDividerProps,
  DrawerProps as MDrawerProps,
  ListItemProps as MListItemProps,
  TabsProps as MTabsProps,
  ToolbarProps as MToolbarProps,
  TooltipProps as MTooltipProps
} from '@material-ui/core';
import { ChangeEvent, ReactNode } from 'react';
import { LinkTabProps } from '../LinkTab';

export interface DrawerProps {
  /**
   * Whether the navigation drawer is open or not
   */
  open: boolean;
  /**
   * The current width of the navigation drawer
   * @remark only applies when the drawer is expanded
   */
  width: number;
  /**
   * Function to trigger when toggling the navigation drawer
   * @example
   * ```ts
   * const handleToggleDrawer = () => setOpen(!open)
   * ```
   */
  toggleDrawer: () => void;
}

export interface DrawerNavBarProps {
  /** Props for the Tree drawer */
  treeDrawer: TreeDrawerProps;
  /** Props for the navigation drawer */
  navigationDrawer: NavigationDrawerProps;
  /** The tabs to render in the navigation bar */
  tabs: LinkTabProps[];
  /**
   *  The currently active tab
   *  Preferably managed in local state
   */
  activeTab: number;
  /** Function to trigger when changing tabs */
  onTabChange(_event: ChangeEvent<unknown>, newValue: number): void;

  /** Additional props to pass to the AppBar component */
  AppBarProps?: MAppBarProps;
  /** Additional props to pass to the Toolbar component */
  ToolbarProps?: MToolbarProps;
  /** Additional props to pass to the Tabs component */
  TabsProps?: MTabsProps;

  /** Additional props to pass to the NavigationHeader component */
  NavigationHeaderProps?: MAppBarProps;
  /** Additional props to pass to the NavigationDrawer component */
  NavigationDrawerProps?: MDrawerProps;
  /** Additional props to pass to each NavigationDrawerItem component */
  NavigationDrawerItemProps?: MListItemProps;
  /** Additional props to pass to the TreeDrawer component */
  TreeDrawerProps?: MDrawerProps;
  /** Additional props to pass to the ResizableDrawer component */
  ResizableDividerProps?: MDividerProps;
  /** Additional props to pass to the Content component */
  ContentBoxProps?: MBoxProps;
}

export interface NavigationDrawerProps extends DrawerProps {
  /**
   * The items to show in the navigation drawer
   */
  items: DrawerItem[];
  /** Additional props to pass to each NavigationDrawerItem component */
  NavigationDrawerItemProps?: MListItemProps;
}

export interface DropdownValue {
  value: string;
  label: string;
}

export interface TreeDrawerProps extends DrawerProps {
  /**
   * The minimum width of the navigation drawer
   * @remark only applies when the drawer is expanded
   * @remark The width of the drawer cannot go lower than the minWidth.
   */
  minWidth: number;
  /** The content of the tree */
  content: ReactNode;
  /** The text to be displayed in the Tooltip when hovering over the info icon */
  tooltipText: MTooltipProps['title'];
  /**
   * Event to trigger when dragging the right-most border of the drawer
   * @example
   * // Using lodash.throttle to throttle the event for performance
   *
   * const handleDragTreeBorder = throttle(
   *   (_, value: unknown) => {
   *     setWidth(value as number);
   *   },
   *   10,
   *   { leading: true, trailing: true }
   * );
   */
  onBorderDrag?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
    ...args: unknown[]
  ) => void;
  /**
   * A list of values that are selectable in the dropdown menu
   * @example
   * ```ts
   * const boomTypes: DropdownValue[] = [
   *   { value: 'Option One', label: 'Option One' },
   *   { value: 'Option Two', label: 'Option Two' },
   *   { value: 'Option Three', label: 'Option Three' },
   *   { value: 'Option Four', label: 'Option Four' },
   *   { value: 'Option Five', label: 'Option Five' },
   *   { value: 'Option Six', label: 'Option Six' }
   * ];
   * ```
   */
  dropdownValues: DropdownValue[];
  /** The current value in the dropdown menu */
  currentDropdownValue: string;
  /**
   * Event to trigger when changing the value in the dropdown menu atop the drawer
   * @example
   * const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => setDropdownValue(event.target.value);
   */
  hanbdleDropdownChange: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
  /** Whether the details pane should be open */
  detailsPaneOpen: boolean;
  /**
   * The content to display in the details pane popper
   * @remark This gets wrapped in a Paper element so it falls over the rest of the content
   */
  detailsPaneContent: ReactNode;
  /** Props applied to the `Box` element containing the content of the tree */
  TreeContentBoxProps?: MBoxProps;
}

/**
 * Describes a single icon in the drawer
 * @example
 * ```jsx
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
 *     ),
 *
 *   },
 * ];
 * ```
 */
export interface DrawerItem {
  /**
   * The icon to show for this item
   * @remark Should use `<ListItemIcon>` from `@material-ui/core/ListItemIcon`
   * @example
   * ```jsx
   * <ListItemIcon>
   *   <SendIcon />
   * </ListItemIcon>
   * ```
   */
  icon: ReactNode;
  /**
   * The text label to show next to the icon when the drawer is expanded
   * @remark Should use `<ListItemText>` from `@material-ui/core/ListItemText`
   * @example
   * ```jsx
   * <ListItemText
   *   primary="Send"
   *   primaryTypographyProps={{ variant: "body2", color: "primary" }}
   * />
   * ```
   */
  label: ReactNode;
  /**
   * Some event to trigger when clicking this `<ListItem>` entry
   * @example
   * ```ts
   * () => history.push('/projects')
   * ```
   */
  onClick?: (event: React.MouseEvent<HTMLLIElement & HTMLDivElement, MouseEvent>) => void;
}

export type TreeAndNavProps = Pick<DrawerNavBarProps, 'treeDrawer' | 'navigationDrawer'>;

export interface TreeDrawerComponentProps extends TreeAndNavProps {
  onMouseDown: (event: React.MouseEvent<HTMLHRElement>) => void;
  onTouchStart: (event: React.TouchEvent<HTMLHRElement>) => void;
  /** Additional props to pass to the ResizableDrawer component */
  ResizableDividerProps?: MDividerProps;
}
