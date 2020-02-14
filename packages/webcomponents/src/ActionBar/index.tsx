import { Typography, TypographyProps, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import classnames from 'classnames';
import React, { memo, ReactNode, useMemo } from 'react';
import { When } from 'react-if';
import Button from '../Button';
import css from './ActionBar.scss';

export interface ActionBarProps {
  /** The title to show in the ActionBar */
  title: ReactNode;
  /**
   * Whether an action button should be displayed in the ActionBar
   * @default false
   */
  shouldHaveButton?: boolean;
  /**
   * Whether the button should be disabled
   * Only relevant when `shouldHaveButton` is set to true
   * @default false
   */
  shouldDisableButton?: boolean;
  /** The text that should be shown in the button */
  buttonLabel?: string;
  /** Typography variant for the header to take */
  typographyVariant?: TypographyProps['variant'];
  /** Custom CSS classes to pass to the title */
  customclasses?: string | string[];
  /** Data-qa tag to apply action bar bounding box */
  'data-qa'?: string;
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
export const ActionBar = memo(
  ({
    title,
    'data-qa': dataQa,
    shouldDisableButton = false,
    shouldHaveButton = false,
    buttonAction,
    buttonLabel,
    typographyVariant = 'h1',
    customclasses
  }: ActionBarProps) => {
    const getTitle = useMemo<ActionBarProps['title']>(() => {
      if (typeof title === 'string') {
        return (
          <Typography
            variant={typographyVariant}
            data-qa='action-bar-title'
            color='textPrimary'
            className={classnames(css.actionHeader, customclasses)}
          >
            {title}
          </Typography>
        );
      }

      if (typeof title === 'function') return title();

      return title;
    }, [customclasses, title, typographyVariant]);

    return (
      <Box component='div' className={classnames(css.actionBar)} data-qa={dataQa}>
        <Grid container direction='row' justify='space-between' alignItems='center' className={css.actionGridLeft}>
          <Grid item key={1} xs={6}>
            {getTitle}
          </Grid>
          <When condition={Boolean(shouldHaveButton)}>
            <Grid item key={2} xs={5} sm={6} className={css.actionGridRight}>
              <Button
                data-qa='action-bar-button'
                variant='contained'
                color='primary'
                label={buttonLabel}
                onClick={() => (buttonAction ? buttonAction() : null)}
                disabled={Boolean(shouldDisableButton)}
              />
            </Grid>
          </When>
        </Grid>
      </Box>
    );
  }
);

export default ActionBar;
