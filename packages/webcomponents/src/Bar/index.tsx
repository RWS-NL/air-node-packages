import { Box } from '@mui/material';
import clsx from 'clsx';
import React, { memo, PropsWithChildren } from 'react';
import css from './Bar.scss';

interface BarProps {
  /** Additional CSS classes to apply to the Bar component */
  classes?: string | string[];
}

/**
 * Constructs a horizontal Bar section using pre-defined Rijkswaterstaat styling
 * @example
 * ```jsx
 * <Bar>
 *   <div> Some Children </div>
 * </Bar>
 * ```
 */
export const Bar = memo(({ classes, children, ...props }: PropsWithChildren<BarProps>) => (
  <Box {...props} component='div' className={clsx(css.bar, classes)}>
    {children}
  </Box>
));
