import css from './ModalContent.scss';
import React, { FC } from 'react';

const ModalContent: FC = props => (
  <div className={css.content}>
    {props.children}
  </div>
);

export default ModalContent;