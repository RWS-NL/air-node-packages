import React, { FC, memo } from 'react';
import css from './ModalContent.scss';

/**
 * Creates modal content using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the modal content
 * @example
 * <ModalContent>
 *   <p>{text}</p>
 * </ModalContent>
 */
export const ModalContent: FC<unknown> = props => (
  <div {...props} className={css.content}>
    {props.children}
  </div>
);

export default memo(ModalContent);