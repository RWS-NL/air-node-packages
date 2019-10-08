import css from './ModalContent.scss';
import React, { FC, memo, PropsWithChildren } from 'react';

/** Creates modal content using pre-defined Rijkswatestaat styling */
export const ModalContent: FC<PropsWithChildren<unknown>> = props => (
  <div className={css.content}>
    {props.children}
  </div>
);

export default memo(ModalContent);