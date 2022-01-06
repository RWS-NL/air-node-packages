import Box from '@mui/material/Box';
import MUITooltip, { TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';
import clsx from 'clsx';
import React, { memo } from 'react';
import css from './Tooltip.scss';

export interface TooltipProps extends MUITooltipProps {
  /** Data-qa tag to apply to the tooltip */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the tooltip */
  customclasses?: string | string[];
}

/**
 * Constructs a tooltip using pre-defined Rijkswaterstaat styling
 * @param param Props to pass to the Tooltip
 * @example
 * ```jsx
 * <Tooltip title='Tooltip Content' placement='top'>
 *   <IconButton>
 *     <CloudDownload color='primary' />
 *   </IconButton>
 * </Tooltip>
 * ```
 */
export const Tooltip = memo(
  ({ 'data-qa': qaTag, title, placement, enterDelay, customclasses, style, children, ...props }: TooltipProps) => (
    <MUITooltip
      {...props}
      title={
        <Box data-qa={qaTag} className={css.box}>
          {title}
        </Box>
      }
      placement={placement || 'top'}
      enterDelay={enterDelay || 300}
      classes={{ tooltip: clsx(css.tooltip, customclasses), popper: css.popper }}
      style={style}
    >
      {children}
    </MUITooltip>
  )
);
