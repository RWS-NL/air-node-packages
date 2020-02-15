import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import React, { memo, ReactNode } from 'react';
import css from './PaginationButton.scss';

export interface PaginationButtonProps extends IconButtonProps {
  /** The icon to show inside the {@link IconButton} */
  icon: ReactNode;
}

export const PaginationButton = memo(({ onClick, disabled, icon, ...props }: PaginationButtonProps) => (
  <IconButton {...props} disabled={disabled} onClick={onClick} color='primary' className={css.noHoverBackground}>
    {icon}
  </IconButton>
));
