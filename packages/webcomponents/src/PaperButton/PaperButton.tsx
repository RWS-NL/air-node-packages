import React, { FC } from 'react';
import { objectHasProperty, customCss, dataQa } from '../constants';
import { Paper, IconButton } from '@material-ui/core';
import css from './PaperButton.scss';
import classnames from 'classnames';

export type PaperButtonProps = {
  /** The Material Icon to display in this paper button */
  icon: JSX.Element;
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
  /** The action to trigger when clicking the icon button */
  onClick(...args: unknown[]): unknown;
};

const PaperButton: FC<PaperButtonProps> = props => {
  const elevation = objectHasProperty(props, 'paperElevation') ? props.paperElevation : 2;

  return (
    <Paper
      className={classnames(css.paper, props.paperCustomclasses)}
      elevation={elevation}
      data-qa={props['paper-data-qa']}
      square
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
    </Paper>
  );
};

export default PaperButton;