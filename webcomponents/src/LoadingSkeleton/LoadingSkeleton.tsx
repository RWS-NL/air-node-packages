import css from './LoadingSkeleton.scss';
import React, { CSSProperties, FC } from 'react';

export type LoadingSkeletonProps = {
  /**
   * Height of the skeleton
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card
   * Also needed for the prop circle (see below).
   */
  height?: number;
  /**
   * Width of the skeleton
   * Useful when the skeleton is inside an inline element with no width of its own
   */
  width?: number;
  /**
   * Prop for making the skeleton look like a circle
   * for when you are creating a user card with a profile picture for instance
   */
  circle?: boolean;
};

const LoadingSkeleton: FC<LoadingSkeletonProps> = props => {
  const style: CSSProperties = {
    width: props.width,
    height: props.height,
    borderRadius: props.height && props.width && props.circle ? '50%' : '0%',
  };

  // Content is a zero-width-non-joiner
  return <span className={css.skeleton} style={style}>&zwnj;</span>;
};

export default LoadingSkeleton;