import classnames from 'classnames';
import css from './Logo.scss';
import { ReactComponent as LogoSVG } from './logo.svg';
import React, { FC, Fragment, SVGProps } from 'react';

const Logo: FC<SVGProps<any>> = props => {
  return (
    <Fragment>
      <LogoSVG {...props} className={classnames(css.logo)} />
    </Fragment>
  );
};

export default Logo;