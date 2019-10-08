import css from './ModalContent.scss';
import React, { FC, memo } from 'react';

/** Creates modal content using pre-defined Rijkswatestaat styling */
export const ModalContent: FC = props => (
  <div className={css.content}>
    {props.children}
  </div>
);

export default memo(ModalContent);