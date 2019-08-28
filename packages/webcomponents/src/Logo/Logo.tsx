import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import { customCss, dataQa } from '../constants';
import css from './Logo.scss';
import { ReactComponent as LogoSVG } from './logo.svg';
import React, { FC, Fragment, SVGProps } from 'react';

export type LogoProps = SVGProps<any> & {
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
};

const Logo: FC<LogoProps> = props => {
  return (
    <Fragment>
      <LogoSVG {...props} className={classnames(css.logo, css.customclasses)} />
    </Fragment>
  );
};

export default Logo;