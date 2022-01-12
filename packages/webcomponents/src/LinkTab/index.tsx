import React, { memo } from 'react';
import { Tab, TabProps } from '@mui/material';

import css from './LinkTab.scss';
import { Link } from 'react-router-dom';

export interface LinkTabProps {
  /** The label to show in the tab */
  label: string;
  /** The URL for this tab to navigate to */
  to: string;
  /**
   * Whether this link should go to an external site or not, using an `<a href=...>` component
   * @default false
   */
  external?: boolean;
  /**
   * Whether this link should open in a new tab or not
   * Only applies when external = true
   * @default false
   */
  openInNewTab?: boolean;

  /** Additional props to pass to each Tab component */
  TabProps?: TabProps;
}

export const LinkTab = memo(({ to, label, external = false, openInNewTab = false, ...props }: LinkTabProps) => {
  if (external) {
    return (
      <Tab
        {...props}
        component='a'
        href={to}
        label={label}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noreferrer noopener' : undefined}
        classes={{ root: css.linkText, selected: css.selectedTab, textColorInherit: css.linkTextInherit }}
      />
    );
  }

  return (
    <Tab
      {...props}
      component={Link}
      to={to}
      label={label}
      classes={{ root: css.linkText, selected: css.selectedTab, textColorInherit: css.linkTextInherit }}
    />
  );
});
