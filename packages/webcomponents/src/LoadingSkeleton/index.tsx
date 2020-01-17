import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
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
  style?: CSSProperties;
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
  ({ width, height, circle, style, 'data-qa': dataQa, ...props }: LoadingSkeletonProps) => {
    const cssStyle: CSSProperties = {
      ...style,
      width: width,
      height: height,
      borderRadius: height && width && circle ? '50%' : '0%'
    };

    // Content is a zero-width-non-joiner
    return (
      <span {...props} data-qa={dataQa} className={classnames(css.skeleton, props.customclasses)} style={cssStyle}>
        &zwnj;
      </span>
    );
  }
);

export default LoadingSkeleton;
