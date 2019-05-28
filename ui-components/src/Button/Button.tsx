import { Button as MUIButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import css from './Button.scss';
import classnames from 'classnames';
import * as React from 'react';

export type RWSButtonProps = {
  label: React.ReactNode;
  disabled?: boolean;
  customClasses?: string | string[];

  onClick (): any;
};

export const Button: React.FC<ButtonProps<'button', RWSButtonProps>> = props => {
  return (
    <MUIButton
      onClick={props.onClick}
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      className={classnames(props.customClasses)}
      classes={{root: css.rwsButton, label: css.rwsButtonLabel}}
      href=''
    >
      {props.label}
    </MUIButton>
  );
};

export default Button;
