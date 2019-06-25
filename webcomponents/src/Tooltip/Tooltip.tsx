import MUITooltip, { TooltipProps as MUITooltipProps } from '@material-ui/core/Tooltip';
import classnames from 'classnames';
import React, { FC, Fragment } from 'react';
import css from './Tooltip.scss';

export type TooltipProps = {
    customTooltipPlacementClass?: string;
} & MUITooltipProps;

const Tooltip: FC<TooltipProps> = props => (
    <MUITooltip
        title={
            <Fragment>
                {props.title}
                <span className={css.arrow} />
            </Fragment>
        }
        placement={props.placement}
        enterDelay={props.enterDelay || 300}
        classes={{ popper: css.tooltip, tooltip: classnames(css.tooltip, props.customTooltipPlacementClass) }}
        PopperProps={{
            popperOptions: {
                modifiers: {
                    arrow: {
                        enabled: true
                    },
                },
            },
        }}
    >
        {props.children}
    </MUITooltip>
)

export default Tooltip;