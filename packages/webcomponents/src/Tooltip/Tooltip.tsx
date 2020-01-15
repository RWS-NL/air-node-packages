import Box from '@material-ui/core/Box';
import MUITooltip, { TooltipProps as MUITooltipProps } from '@material-ui/core/Tooltip';
import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import React, { FC, memo } from 'react';
import css from './Tooltip.scss';

export interface TooltipProps extends MUITooltipProps {
  /** Data-qa tag to apply to the tooltip */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the tooltip */
  customclasses?: string | string[];
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
}

/**
 * Constructs a tooltip using pre-defined Rijkswaterstaat styling
 * @param param Props to pass to the Tooltip
 * @example
 * <Tooltip title='Tooltip Content' placement='top'>
 *   <IconButton>
 *     <CloudDownload color='primary' />
 *   </IconButton>
 * </Tooltip>
 */
export const Tooltip: FC<TooltipProps> = ({
  'data-qa': qaTag, title, placement, enterDelay, customclasses, style, children, ...props
}) => (
  <MUITooltip
    {...props}
    title={
      <Box data-qa={qaTag} className={css.box}>
        {title}
      </Box>
    }
    placement={placement || 'top'}
    enterDelay={enterDelay || 300}
    classes={{ tooltip: classnames(css.tooltip, customclasses), popper: css.popper }}
    style={style}
  >
    {children}
  </MUITooltip>
);

export default memo(Tooltip);