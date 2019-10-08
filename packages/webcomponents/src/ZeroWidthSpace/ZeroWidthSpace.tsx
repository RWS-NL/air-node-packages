import Typography, {TypographyProps} from '@material-ui/core/Typography';
import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import React, { FC, memo } from 'react';
import { customCss, dataQa } from '../constants';

export interface ZeroWidthSpaceProps extends TypographyProps {
  /** Data-qa tag to apply to the tooltip */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the tooltip */
  customclasses?: customCss;
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
}

/** Inserts a Zero Width Space as a React component */
const ZeroWidthSpace: FC<ZeroWidthSpaceProps> = props => (
  <Typography
    variant={props.variant || 'caption'}
    style={props.style}
    className={classnames(props.customclasses)}
    data-qa={props['data-qa']}
  >
    &#8203;
  </Typography>
);

export default memo(ZeroWidthSpace);