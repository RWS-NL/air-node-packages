/**
 * @class Button
 */

import React, { FC, ReactNode } from 'react'
import classnames from 'classnames';
import css from './Button.scss';
import { Button as MUIButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

import './Button.scss';

export type RWSButtonProps = {
    variant: 'text' | 'outlined' | 'contained' | undefined;
    color: 'primary' | 'secondary' | 'default' | 'inherit' | undefined;
    label: ReactNode;
    disabled?: boolean;
    customClasses?: string | string[];

    onClick(): any;
};

export const Button: FC<ButtonProps<'button', RWSButtonProps>> = props => (
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