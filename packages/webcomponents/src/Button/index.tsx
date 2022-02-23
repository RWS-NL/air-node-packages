import { styled } from '@mui/material/styles';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import clsx from 'clsx';
import React, { forwardRef, memo, ReactNode } from 'react';
import css from './Button.scss';

export interface ButtonProps {
  /** The variant of the button */
  variant: 'text' | 'outlined' | 'contained' | undefined;
  /** The color type of the button */
  color: 'primary' | 'secondary' | 'inherit' | 'error' | 'info' | 'success' | 'warning' | undefined;
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

const PREFIX = 'Button';
const classes = {
  buttonShadow: `${PREFIX}-buttonShadow`
};
const StyledButton = styled(MUIButton)(({ theme }) => ({
  [`&.${classes.buttonShadow}`]: {
    boxShadow: theme.shadows[1],
    border: 'transparant'
  }
}));

/**
 * Constructs a button using pre-defined Rijkswaterstaat styling
 * @remark Ref is forwarded to the Material-UI button to allow for wrapping this button with a Tooltip
 * @param props Props to pass to the button
 * @example
 * ```jsx
 * <Button label='button' onClick={() => undefined} variant='contained' color='primary' />
 * ```
 */

export const Button = memo(
  forwardRef<HTMLButtonElement, MUIButtonProps<'button', ButtonProps>>((props, ref) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        data-qa={props['data-qa']}
        onClick={props.onClick}
        variant={props.variant}
        color={props.color}
        disabled={props.disabled}
        className={clsx(props.customclasses, props.className)}
        classes={{
          ...props.classes,
          root: clsx(css.button, props.classes?.root),
          disabled: clsx(css.buttonDisabled, props.classes?.disabled),
          containedPrimary: clsx(css.buttonPrimary, classes.buttonShadow, props.classes?.containedPrimary),
          containedSecondary: clsx(css.buttonSecondary, classes.buttonShadow, props.classes?.containedSecondary),
          outlined: clsx(css.buttonOutlined, classes.buttonShadow, props.classes?.outlined),
          outlinedPrimary: clsx(css.buttonOutlined, classes.buttonShadow, props.classes?.outlinedPrimary),
          outlinedSecondary: clsx(css.buttonOutlinedSecondary, classes.buttonShadow, props.classes?.outlinedSecondary)
        }}
        href={undefined}
      >
        {props.label}
      </StyledButton>
    );
  })
);
