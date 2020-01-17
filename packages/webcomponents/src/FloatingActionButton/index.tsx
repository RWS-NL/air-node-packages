import Fab, { FabProps as MFabProps } from '@material-ui/core/Fab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { memo, ReactNode } from 'react';
import Tooltip, { TooltipProps } from '../Tooltip';

export interface FabProps extends MFabProps {
  /** The icon to show inside the Floating Action Button */
  icon: ReactNode;
  /** The content to put in the on-hover tooltip */
  tooltipContent: ReactNode;
  /** Props applied to the `Tooltip` element */
  TooltipProps?: Partial<Omit<TooltipProps, 'title'>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

/**
 * Constructs a Floating Action Button using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the Floating Action Button.
 * Also supports all properties applicable to [Material-UI's Fab API](https://material-ui.com/api/fab/)
 * and webcomponents [TooltipProps](https://rws-nl.github.io/air-node-packages/interfaces/_rws_air_webcomponents.tooltipprops.html)
 *
 * @example
 * ```jsx
 * <FloatingActionButton tooltipContent='Cool Tooltip' icon={<SearchIcon/>}/>
 * ```
 */
export const FloatingActionButton = memo(({ tooltipContent, icon, TooltipProps, ...props }: FabProps) => {
  const classes = useStyles();

  return (
    <Tooltip {...TooltipProps} title={tooltipContent}>
      <Fab {...props} className={classes.fab} color='primary'>
        {icon}
      </Fab>
    </Tooltip>
  );
});

export default FloatingActionButton;
