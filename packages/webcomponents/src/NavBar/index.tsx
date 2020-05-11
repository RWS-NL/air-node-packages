import { AppBar, AppBarProps, Grid, Tabs, TabsProps, Toolbar, ToolbarProps } from '@material-ui/core';
import React, { ChangeEvent, Fragment, memo } from 'react';
import { ActionBar, ActionBarProps } from '../ActionBar';
import { LinkTab, LinkTabProps } from '../LinkTab';
import css from './NavBar.scss';

export interface NavBarProps {
  /** The tabs to render */
  tabs: LinkTabProps[];
  /** The title to show in the ActionBar */
  actionBarTitle: string;
  /**
   *  The currently active tab
   *  Preferably managed in local state
   */
  activeTab: number;
  /** Function to trigger when changing tabs */
  onTabChange(_event: ChangeEvent<object>, newValue: number): void;

  /** Additional props to pass to the AppBar component */
  AppBarProps?: AppBarProps;
  /** Additional props to pass to the Toolbar component */
  ToolbarProps?: ToolbarProps;
  /** Additional props to pass to the Tabs component */
  TabsProps?: TabsProps;
  /** Additional props to pass to the ActionBar component */
  ActionBarProps?: ActionBarProps;
}

export const NavBar = memo(
  ({
    ActionBarProps,
    AppBarProps,
    TabsProps,
    ToolbarProps,
    actionBarTitle,
    activeTab,
    onTabChange,
    tabs
  }: NavBarProps) => (
    <Fragment>
      <AppBar {...AppBarProps} position='static' color='secondary' classes={{ root: css.appBar }}>
        <Toolbar {...ToolbarProps} variant='dense'>
          <Tabs
            {...TabsProps}
            variant='standard'
            value={activeTab}
            onChange={onTabChange}
            classes={{ indicator: css.tabIndicator }}
          >
            {tabs.map((tab, index) => (
              <LinkTab
                key={index}
                label={tab.label}
                to={tab.to}
                external={tab.external}
                data-qa={`link-tab-${index}`}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid key={1} item xs={12}>
          <ActionBar {...ActionBarProps} title={actionBarTitle} />
        </Grid>
      </Grid>
    </Fragment>
  )
);
