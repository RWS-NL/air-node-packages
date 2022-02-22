import Fab, { FabProps as MFabProps } from '@mui/material/Fab';
import React, { memo } from 'react';
import { Tooltip, TooltipProps } from '../Tooltip';

export interface FabProps extends MFabProps {
  /** When true, FAB will not have a Tooltip on hover */
  disableTooltip?: boolean;
  /** The content to put in the on-hover tooltip */
  tooltipContent?: TooltipProps['title'];
  /** Props applied to the `Tooltip` element */
  TooltipProps?: Partial<Omit<TooltipProps, 'title'>>;
}

/**
 * Constructs a Floating Action Button using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the Floating Action Button.
 * Also supports all properties applicable to [Material-UI's Fab API](https://material-ui.com/api/fab/)
 * and webcomponents [TooltipProps](https://rws-nl.github.io/air-node-packages/interfaces/_rws_air_webcomponents.tooltipprops.html)
 *
 * @example
 * ```jsx
 * <FloatingActionButton tooltipContent='Cool Tooltip' children={<SearchIcon/>}/>
 * ```
 */
export const FloatingActionButton = memo(
  ({ children, tooltipContent, disableTooltip, TooltipProps, ...props }: FabProps) => {
    if (disableTooltip) {
      return (
        <Fab
          {...props}
          color='primary'
          sx={{
            position: 'fixed',
            bottom: 2,
            right: 2,
            zIndex: 'speedDial',
            borderRadius: 1
          }}
        >
          {children}
        </Fab>
      );
    }

    return (
      <Tooltip {...TooltipProps} title={tooltipContent ?? ''}>
        <Fab
          {...props}
          color='primary'
          sx={{
            position: 'fixed',
            bottom: 2,
            right: 2,
            zIndex: 'speedDial',
            borderRadius: 1
          }}
        >
          {children}
        </Fab>
      </Tooltip>
    );
  }
);
