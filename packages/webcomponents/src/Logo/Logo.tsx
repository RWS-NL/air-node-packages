import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import React, { FC, memo, SVGProps } from 'react';
import css from './Logo.scss';
import { ReactComponent as LogoSVG } from './logo.svg';

export interface LogoProps extends SVGProps<any> {
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
}

/**
 * Creates a logo using pre-defined Rijkswaterstaat SVG
 * @example
 * <Logo height={200} width={500}/>
 */
export const Logo: FC<LogoProps> = props => <LogoSVG {...props} className={classnames(css.logo, css.customclasses)} />;

export default memo(Logo);