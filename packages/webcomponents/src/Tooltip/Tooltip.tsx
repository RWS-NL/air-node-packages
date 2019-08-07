import Box from '@material-ui/core/Box';
import MUITooltip, { TooltipProps as MUITooltipProps } from '@material-ui/core/Tooltip';
import classnames from 'classnames';
import React, { FC } from 'react';
import css from './Tooltip.scss';
import { customCss, dataQa } from 'typings';

export type TooltipProps = MUITooltipProps & {
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
};

const Tooltip: FC<TooltipProps> = props => (
  <MUITooltip
    title={
      <Box data-qa={props['data-qa']}>
        {props.title}
        <span className={css.arrow} />
      </Box>
    }
    placement={props.placement}
    enterDelay={props.enterDelay || 300}
    classes={{ popper: css.tooltip, tooltip: classnames(css.tooltip, props.customclasses) }}
    PopperProps={{popperOptions: {modifiers: {arrow: {enabled: true}}}}}
  >
    {props.children}
  </MUITooltip>
);

export default Tooltip;