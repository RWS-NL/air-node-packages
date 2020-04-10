import { createStyles, makeStyles, Theme } from '@material-ui/core';
import MUIButton, { ButtonProps as MUIButtonProps } from '@material-ui/core/Button';
import clsx from 'clsx';
import React, { memo, ReactNode } from 'react';
import css from './Button.scss';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({ buttonShadow: { boxShadow: theme.shadows[1], border: 'transparant' } })
);

/**
 * Constructs a button using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the button
 * @example
 * ```jsx
 * <Button label='button' onClick={() => undefined} variant='contained' color='primary' />
 * ```
 */
export const Button = memo((props: MUIButtonProps<'button', ButtonProps>) => {
  const classes = useStyles();

  return (
    <MUIButton
      {...props}
      data-qa={props['data-qa']}
      onClick={props.onClick}
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      className={clsx(props.customclasses)}
      classes={{
        root: css.button,
        label: clsx(css.buttonLabel, props.customlabelclasses),
        disabled: css.buttonDisabled,
        containedPrimary: clsx(css.buttonPrimary, classes.buttonShadow),
        containedSecondary: clsx(css.buttonSecondary, classes.buttonShadow),
        outlined: clsx(css.buttonOutlined, classes.buttonShadow),
        outlinedPrimary: clsx(css.buttonOutlined, classes.buttonShadow),
        outlinedSecondary: clsx(css.buttonOutlinedSecondary, classes.buttonShadow)
      }}
      href={undefined}
    >
      {props.label}
    </MUIButton>
  );
});
