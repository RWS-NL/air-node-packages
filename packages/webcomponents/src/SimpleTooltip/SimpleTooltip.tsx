import Box from '@material-ui/core/Box';
import MUITooltip, { TooltipProps as MUITooltipProps } from '@material-ui/core/Tooltip';
import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import React, { FC } from 'react';
import css from './SimpleTooltip.scss';
import { customCss, dataQa } from 'typings';

export type SimpleTooltipProps = MUITooltipProps & {
  /** data-qa tag to apply to the tooltip */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the tooltip */
  customclasses?: customCss;
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
};

const SimpleTooltip: FC<SimpleTooltipProps> = props => (
  <MUITooltip
    title={
      <Box data-qa={props['data-qa']} className={css.box}>
        {props.title}
      </Box>
    }
    placement={props.placement || 'top'}
    enterDelay={props.enterDelay || 300}
    classes={{ tooltip: classnames(css.tooltip, props.customclasses), popper: css.popper }}
    style={props.style}
  >
    {props.children}
  </MUITooltip>
);

export default SimpleTooltip;