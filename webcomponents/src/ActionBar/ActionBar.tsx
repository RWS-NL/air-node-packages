import Grid from '@material-ui/core/Grid/Grid';
import css from './ActionBar.scss';
import Button from '../Button/Button';
import classnames from 'classnames';
import React, { FC, Fragment } from 'react';
import { customCss, dataQa } from '../typings';

export type ActionBarProps = {
  /** The title to show in the ActionBar */
  title: string;
  /** Whether an action button should be displayed in the ActionBar */
  shouldHaveButton?: boolean;
  /** The text that should be shown in the button */
  buttonLabel?: string;
  /** data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
  /** The action that should be invoked when the button is clicked */
  buttonAction?: (...args: any[]) => any;
};

const ActionBar: FC<ActionBarProps> = props => {
  return (
    <div className={classnames('navigation-bar', css.actionBar)} data-qa={props['data-qa']}>
      <Grid container direction='row' justify='space-between' alignItems='center' style={{ height: '100%' }}>
        <Grid item key={1} xs={6}>
          <h1 data-qa='action-bar-title' className={classnames(css.actionBarHeader)}>
            {props.title}
          </h1>
        </Grid>
        <Grid item key={2} xs={6}>
          {props.shouldHaveButton ?
            <Button
              data-qa='action-bar-button'
              variant='contained'
              color='primary'
              label={props.buttonLabel}
              onClick={() => props.buttonAction ? props.buttonAction() : null}
            />
            : <Fragment />
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default ActionBar;
