/**
 * @class Button
 */

import MUIButton, { ButtonProps as MUIButtonProps } from '@material-ui/core/Button';
import css from './Button.scss';
import classnames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { customCss, DataQa } from '../typings';

export type ButtonProps = {
  /** The variant of the button */
  variant: 'text' | 'outlined' | 'contained' | undefined;
  /** The color type of the button */
  color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined;
  /** The label to be displayed inside the button */
  label: ReactNode;
  /** Whether this button should be disabled */
  disabled?: boolean;
  /** data-qa tag to apply to the search bar and input element */
  'data-qa'?: DataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
  /** The action that should be triggered when clicking the button */
  onClick (): any;
};

export const Button: FC<MUIButtonProps<'button', ButtonProps>> = props => (
  <MUIButton
    data-qa={props['data-qa']}
    onClick={props.onClick}
    variant={props.variant}
    color={props.color}
    disabled={props.disabled}
    className={classnames(props.customclasses)}
    classes={{
      root: css.button,
      label: css.buttonLabel,
      disabled: css.buttonDisabled,
      containedPrimary: css.buttonPrimary,
      containedSecondary: css.buttonSecondary,
      outlined: css.buttonOutlined,
      outlinedPrimary: css.buttonOutlined,
      outlinedSecondary: css.buttonOutlinedSecondary,
    }}
    href={undefined}
  >
    {props.label}
  </MUIButton>
);

export default Button;