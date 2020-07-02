import { CSSProperties } from '@material-ui/styles';
import React, { memo, SVGProps } from 'react';
import { ReactComponent as LogoSVG } from './logo.svg';

export interface LogoProps extends SVGProps<any> {
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
}

/**
 * Creates a logo using pre-defined Rijkswaterstaat SVG
 * @example
 * ```jsx
 *
 * <Logo height={125} width={314}/>
 *
 * ```
 */
export const Logo = memo((props: LogoProps) => <LogoSVG {...props} />);
