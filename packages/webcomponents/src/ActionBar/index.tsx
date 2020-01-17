import Grid from '@material-ui/core/Grid/Grid';
import classnames from 'classnames';
import React, { memo, ReactNode, useMemo } from 'react';
import { When } from 'react-if';
import Button from '../Button';
import css from './ActionBar.scss';

export interface ActionBarProps {
  /** The title to show in the ActionBar */
  title: string | ReactNode;
  /** Whether an action button should be displayed in the ActionBar */
  shouldHaveButton?: boolean;
  /** Whether the button should be disabled, only relevant when `shouldHaveButton` is set to true */
  shouldDisableButton?: boolean;
  /** The text that should be shown in the button */
  buttonLabel?: string;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
  /** The action that should be invoked when the button is clicked */
  buttonAction?: (...args: any[]) => any;
}

/**
 * Creates an action bar using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the actionbar
 * @example
 * ```jsx
 * <ActionBar title='Cool title' />
 * ```
 */
export const ActionBar = memo((props: ActionBarProps) => {
  const getTitle = useMemo<ActionBarProps['title']>(() => {
    if (typeof props.title === 'string') {
      return (
        <h1 data-qa='action-bar-title' className={classnames(css.actionBarHeader)}>
          {props.title}
        </h1>
      );
    }

    if (typeof props.title === 'function') return props.title();

    return props.title;
  }, [props]);

  return (
    <div className={classnames('navigation-bar', css.actionBar)} data-qa={props['data-qa']}>
      <Grid container direction='row' justify='space-between' alignItems='center' style={{ height: '100%' }}>
        <Grid item key={1} xs={6}>
          {getTitle}
        </Grid>
        <When condition={Boolean(props.shouldHaveButton)}>
          <Grid item key={2} xs={6}>
            <Button
              data-qa='action-bar-button'
              variant='contained'
              color='primary'
              label={props.buttonLabel}
              onClick={() => (props.buttonAction ? props.buttonAction() : null)}
              disabled={Boolean(props.shouldDisableButton)}
            />
          </Grid>
        </When>
      </Grid>
    </div>
  );
});

export default ActionBar;
