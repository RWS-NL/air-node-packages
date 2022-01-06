import { Box, SxProps } from '@mui/material';
import clsx from 'clsx';
import React, { memo } from 'react';
import css from './LoadingSkeleton.scss';

export interface LoadingSkeletonProps {
  /**
   * Height of the skeleton
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card
   * Also needed for the prop circle (see below).
   */
  height?: string | number;
  /**
   * Width of the skeleton
   * Useful when the skeleton is inside an inline element with no width of its own
   */
  width?: string | number;
  /**
   * Prop for making the skeleton look like a circle
   * for when you are creating a user card with a profile picture for instance
   */
  circle?: boolean;
  /** Any additional CSSProperties to pass to the component */
  sx?: SxProps;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
}

/**
 * Constructs a loading skeleton to reserve space for loading data
 * @param props Props to pass to the loading skeleton
 * @example
 * ```jsx
 * <LoadingSkeleton
 *   data-qa='loading-skeleton'
 *   width={500} height={50}
 * />
 * ```
 */
export const LoadingSkeleton = memo(
  ({ width, height, circle, sx, 'data-qa': dataQa, ...props }: LoadingSkeletonProps) => {
    const cssStyle: SxProps = {
      ...sx,
      display: 'inline',
      width: width,
      height: height,
      borderRadius: height && width && circle ? '50%' : '0%'
    };

    // Content is a zero-width-non-joiner
    return (
      <Box {...props} data-qa={dataQa} className={clsx(css.skeleton, props.customclasses)} sx={cssStyle}>
        &zwnj;
      </Box>
    );
  }
);
