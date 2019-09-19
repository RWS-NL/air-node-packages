import css from './ModalContent.scss';
import React, { FC } from 'react';

/** Creates modal content using pre-defined Rijkswatestaat styling */
export const ModalContent: FC = props => (
  <div className={css.content}>
    {props.children}
  </div>
);

export default ModalContent;