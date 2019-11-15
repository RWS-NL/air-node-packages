import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import { customCss, dataQa } from '../constants';
import css from './Logo.scss';
import { ReactComponent as LogoSVG } from './logo.svg';
import React, { FC, Fragment, SVGProps, memo } from 'react';

export interface LogoProps extends SVGProps<any> {
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
}

/**
 * Creates a logo using pre-defined Rijkswaterstaat SVG
 * ```jsx
 * <Logo height={200} width={500}/>
 * ```
 */
export const Logo: FC<LogoProps> = props => <LogoSVG {...props} className={classnames(css.logo, css.customclasses)} />;

export default memo(Logo);