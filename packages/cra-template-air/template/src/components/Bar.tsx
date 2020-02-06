import classnames from 'classnames';
import React, { FC } from 'react';
import css from 'styles/modules/Bar.module.scss';

interface Props {
  classes?: string | string[];
}

const Bar: FC<Props> = ({ children, classes }) => <div className={classnames(css.bar, classes)}>{children}</div>;

export default Bar;
