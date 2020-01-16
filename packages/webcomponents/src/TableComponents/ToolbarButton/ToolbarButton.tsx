import React, { FC, useMemo, memo } from 'react';
import { Paper, IconButton } from '@material-ui/core';
import css from './ToolbarButton.scss';
import classnames from 'classnames';
import Tooltip, { TooltipProps } from '../../Tooltip/Tooltip';
import { objectHasProperty } from '@rws-air/utils';

export interface ToolbarButtonProps {
  /** The Material Icon to display in this paper button */
  icon: JSX.Element;
  /**
   * Whether this button should be disabled or not
   * @default false
   */
  disabled?: boolean;
  /**
   * The text content to put in the tooltip
   * @default 'Click Me'
   */
  tooltipText?: TooltipProps['title'];
  /**
   * The placement for the tooltip
   * @default top
   */
  tooltipPlacement?: TooltipProps['placement'];
  /**
   * Disables the inclusion of a tooltip
   * @default false
   */
  disableTooltip?: boolean;
  /**
   * The elevation to apply to the paper component
   * @default 2
   */
  paperElevation?: number;
  /** Data-qa tag to apply to the paper component */
  'paper-data-qa'?: string;
  /** Custom CSS classes to pass to the paper component */
  paperCustomclasses?: string | string[];
  /** Data-qa tag to apply to the IconButton component */
  'iconButton-data-qa'?: string;
  /** Custom CSS classes to pass to the IconButton component */
  iconButtonCustomclasses?: string | string[];
  /** Custom CSS classes to pass to the Tooltip component */
  tooltipCustomClasses?: string | string[];
  /** Data-qa tag to apply to the Tooltip component */
  'tooltip-data-qa'?: string;
  /** The action to trigger when clicking the icon button */
  onClick(...args: unknown[]): unknown;
}

/**
 * Constructs a ToolbarButton (elevated button with Material Paper) using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the ToolbarButton
 * @example
 * <ToolbarButton
 *   icon={<CloudDownload/>}
 *   disabled={false}
 *   onClick={console.log}
 *   tooltipText='SAMPLE'
 *   tooltipPlacement={'top'}
 *   disableTooltip={false}
 * />
 */
export const ToolbarButton: FC<ToolbarButtonProps> = props => {
  const elevation = useMemo(
    () => objectHasProperty(props, 'paperElevation') ? props.paperElevation : 2,
    [ props.paperElevation ]
  );

  const renderWithTooltip = useMemo(
    () => (
      <Tooltip
        data-qa={props['tooltip-data-qa']}
        customclasses={props.tooltipCustomClasses}
        placement={props.tooltipPlacement || 'top'}
        title={props.tooltipText || 'Click Me'}
      >
        <IconButton
          disabled={props.disabled}
          data-qa={props['iconButton-data-qa']}
          className={classnames(css.inputButton, props.iconButtonCustomclasses)}
          onClick={props.onClick}
          size='small'
          color='primary'
        >
          {props.icon}
        </IconButton>
      </Tooltip>
    ),
    [
      props.disabled, props.onClick, props.icon, props.iconButtonCustomclasses,
      props.tooltipCustomClasses, props.tooltipPlacement, props.tooltipText
    ]
  );

  const renderWithoutTooltip = useMemo(() => (
    <IconButton
      disabled={props.disabled}
      data-qa={props['iconButton-data-qa']}
      className={classnames(css.inputButton, props.iconButtonCustomclasses)}
      onClick={props.onClick}
      size='small'
      color='primary'
    >
      {props.icon}
    </IconButton>
  ), [ props.disabled, props.onClick, props.icon, props.iconButtonCustomclasses ]);

  const customRender = useMemo(() => {
    if (props.disabled) return renderWithoutTooltip;
    if (props.disableTooltip) return renderWithoutTooltip;

    return renderWithTooltip;
  }, [ props.disabled, props.disableTooltip ]);

  return (
    <Paper
      className={classnames(css.paper, props.paperCustomclasses)}
      elevation={elevation}
      data-qa={props['paper-data-qa']}
      square
    >
      {customRender}
    </Paper>
  );
};

export default memo(ToolbarButton);