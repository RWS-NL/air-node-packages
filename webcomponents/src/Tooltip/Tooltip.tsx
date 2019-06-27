import MUITooltip, { TooltipProps as MUITooltipProps } from '@material-ui/core/Tooltip';
import classnames from 'classnames';
import React, { FC, Fragment } from 'react';
import css from './Tooltip.scss';
import { customCss, DataQa } from 'typings';

export type TooltipProps = MUITooltipProps & {
  /** data-qa tag to apply to the search bar and input element */
  'data-qa'?: DataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
};

const Tooltip: FC<TooltipProps> = props => (
  <MUITooltip
    data-qa={props['data-qa']}
    title={
      <Fragment>
        {props.title}
        <span className={css.arrow} />
      </Fragment>
    }
    placement={props.placement}
    enterDelay={props.enterDelay || 300}
    classes={{ popper: css.tooltip, tooltip: classnames(css.tooltip, props.customclasses) }}
    PopperProps={{
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: true,
          },
        },
      },
    }}
  >
    {props.children}
  </MUITooltip>
);

export default Tooltip;