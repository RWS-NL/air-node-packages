import Typography, { TypographyProps } from '@mui/material/Typography';
import clsx from 'clsx';
import React, { memo } from 'react';

export interface ZeroWidthSpaceProps extends TypographyProps {
  /** Data-qa tag to apply to the tooltip */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the tooltip */
  customclasses?: string | string[];
}

/**
 * Inserts a Zero Width Space as a React component
 * @param props Props to pass to the Zero-Width Space
 * @example
 * ```jsx
 * <ZeroWidthSpace />
 * ```
 */
export const ZeroWidthSpace = memo(
  ({ variant, style, customclasses, 'data-qa': dataQa, ...props }: ZeroWidthSpaceProps) => (
    <Typography
      {...props}
      variant={variant || 'caption'}
      style={style}
      className={clsx(customclasses)}
      data-qa={dataQa}
    >
      &#8203;
    </Typography>
  )
);
