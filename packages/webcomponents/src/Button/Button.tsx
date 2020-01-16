import MUIButton, { ButtonProps as MUIButtonProps } from '@material-ui/core/Button';
import css from './Button.scss';
import classnames from 'classnames';
import React, { FC, ReactNode, memo } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

export interface ButtonProps {
  /** The variant of the button */
  variant: 'text' | 'outlined' | 'contained' | undefined;
  /** The color type of the button */
  color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined;
  /** The label to be displayed inside the button */
  label: ReactNode;
  /** Whether this button should be disabled */
  disabled?: boolean;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
  /** Custom CSS classes to pass to the button label */
  customlabelclasses?: string | string[];
  /** The action that should be triggered when clicking the button */
  onClick(): unknown;
}

const useStyles = makeStyles((theme: Theme) => createStyles({ buttonShadow: { boxShadow: theme.shadows[1], border: 'transparant' } }),
);

/**
 * Constructs a button using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the button
 * @example
 * <Button label='button' onClick={() => undefined} variant='contained' color='primary' />
 */
export const Button: FC<MUIButtonProps<'button', ButtonProps>> = props => {
  const classes = useStyles();

  return (
    <MUIButton
      {...props}
      data-qa={props['data-qa']}
      onClick={props.onClick}
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      className={classnames(props.customclasses)}
      classes={{
        root: css.button,
        label: classnames(css.buttonLabel, props.customlabelclasses),
        disabled: css.buttonDisabled,
        containedPrimary: classnames(css.buttonPrimary, classes.buttonShadow),
        containedSecondary: classnames(css.buttonSecondary, classes.buttonShadow),
        outlined: classnames(css.buttonOutlined, classes.buttonShadow),
        outlinedPrimary: classnames(css.buttonOutlined, classes.buttonShadow),
        outlinedSecondary: classnames(css.buttonOutlinedSecondary, classes.buttonShadow),
      }}
      href={undefined}
    >
      {props.label}
    </MUIButton>
  );
};

export default memo(Button);