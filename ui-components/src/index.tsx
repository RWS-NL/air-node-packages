/**
 * @class ExampleComponent
 */

import * as React from 'react'
import classnames from 'classnames';
import css from './Button.scss';
import { Button as MUIButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

export type Props = { text: string }
export type RWSButtonProps = {
  label: React.ReactNode;
  disabled?: boolean;
  customClasses?: string | string[];

  onClick (): any;
};

export default class Button extends React.Component<ButtonProps<'button', RWSButtonProps>> {
  render () {
    return (
      <MUIButton
      onClick={this.props.onClick}
      variant={this.props.variant}
      color={this.props.color}
      disabled={this.props.disabled}
      className={classnames(this.props.customClasses)}
      classes={{root: css.rwsButton, label: css.rwsButtonLabel}}
      href =''
      >
        {this.props.label}
      </MUIButton>
    )
  }
}

// export default class ExampleComponent extends React.Component<Props> {
//   render() {
//     const {
//       text
//     } = this.props

//     return (
//       <div>
//         Example Component: {text}
//       </div>
//     )
//   }
// }
