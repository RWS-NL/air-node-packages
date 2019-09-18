import React, { FC } from 'react';
import { objectHasProperty, customCss, dataQa } from '../constants';
import { Paper, IconButton } from '@material-ui/core';
import css from './PaperButton.scss';
import classnames from 'classnames';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';

export interface PaperButtonProps {
  /** The Material Icon to display in this paper button */
  icon: JSX.Element;
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
  'paper-data-qa'?: dataQa;
  /** Custom CSS classes to pass to the paper component */
  paperCustomclasses?: customCss;
  /** Data-qa tag to apply to the IconButton component */
  'iconButton-data-qa'?: dataQa;
  /** Custom CSS classes to pass to the IconButton component */
  iconButtonCustomclasses?: customCss;
  /** Custom CSS classes to pass to the Tooltip component */
  tooltipCustomClasses?: customCss;
  /** Data-qa tag to apply to the Tooltip component */
  'tooltip-data-qa'?: dataQa;
  /** The action to trigger when clicking the icon button */
  onClick(...args: unknown[]): unknown;
}

const PaperButton: FC<PaperButtonProps> = props => {
  const elevation = objectHasProperty(props, 'paperElevation') ? props.paperElevation : 2;

  const renderWithTooltip = () => (
    <Tooltip
      data-qa={props['tooltip-data-qa']}
      customclasses={props.tooltipCustomClasses}
      placement={props.tooltipPlacement || 'top'}
      title={props.tooltipText || 'Click Me'}
    >
      <IconButton
        data-qa={props['iconButton-data-qa']}
        className={classnames(css.inputButton, props.iconButtonCustomclasses)}
        onClick={props.onClick}
        size='small'
        color='primary'
      >
        {props.icon}
      </IconButton>
    </Tooltip>
  );

  const renderWithoutTooltip = () => (
    <IconButton
      data-qa={props['iconButton-data-qa']}
      className={classnames(css.inputButton, props.iconButtonCustomclasses)}
      onClick={props.onClick}
      size='small'
      color='primary'
    >
      {props.icon}
    </IconButton>
  );

  return (
    <Paper
      className={classnames(css.paper, props.paperCustomclasses)}
      elevation={elevation}
      data-qa={props['paper-data-qa']}
      square
    >
      {props.disableTooltip ? renderWithoutTooltip() : renderWithTooltip()}
    </Paper>
  );
};

export default PaperButton;