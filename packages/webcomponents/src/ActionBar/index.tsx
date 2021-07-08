import { Box, BoxProps, Typography, TypographyProps } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import clsx from 'clsx';
import React, { memo, ReactNode, useMemo } from 'react';
import { When } from 'react-if';
import { Button } from '../Button';
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

  /** Additional props to apply to the Typography component */
  TypographyProps?: TypographyProps;
  /** Additional props to pass to the encompasing Box component */
  BoxProps?: BoxProps;

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
    BoxProps,
    TypographyProps
  }: ActionBarProps) => {
    const getTitle = useMemo<ActionBarProps['title']>(() => {
      if (typeof title === 'string') {
        return (
          <Typography
            variant='h1'
            data-qa='action-bar-title'
            color='textPrimary'
            {...TypographyProps}
            className={clsx(css.actionHeader, TypographyProps?.className, TypographyProps?.classes)}
          >
            {title}
          </Typography>
        );
      }

      if (typeof title === 'function') return title();

      return title;
    }, [TypographyProps, title]);

    return (
      <Box _component='div' data-qa={dataQa} {...BoxProps} className={clsx(css.actionBar, BoxProps?.className)}>
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
