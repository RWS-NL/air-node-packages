/**
 * @class Button
 */

import React, { FC, ReactNode } from 'react'
import classnames from 'classnames';
import css from './Button.scss';
import { Button as MUIButton } from '@material-ui/core';
import { ButtonProps as MUIButtonProps } from '@material-ui/core/Button';

import './Button.scss';

export type ButtonProps = {
    /** The variant of the button */
    variant: 'text' | 'outlined' | 'contained' | undefined;
    /** The color type of the button */
    color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined;
    /** The label to be displayed inside the button */
    label: ReactNode;
    /** Whether this button should be disabled */
    disabled?: boolean;
    /** Any extra CSS classes to be passed to the button */
    customClasses?: string | string[];

    /** The action that should be triggered when clicking the button */
    onClick(): any;
};

export const Button: FC<MUIButtonProps<'button', ButtonProps>> = props => (
    <MUIButton
        onClick={props.onClick}
        variant={props.variant}
        color={props.color}
        disabled={props.disabled}
        className={classnames(props.customClasses)}
        classes={{ root: css.rwsButton, label: css.rwsButtonLabel }}
        href={undefined}
    >
        {props.label}
    </MUIButton>
)

export default Button;