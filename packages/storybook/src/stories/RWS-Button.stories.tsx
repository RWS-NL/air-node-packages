import { Grid } from '@material-ui/core';
import { Button } from '@rws-air/webcomponents';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';
import { baseRWSTheme } from '../utils/theme';

storiesOf('Button', module)
  .addDecorator(muiTheme([ baseRWSTheme ]))
  .add(
    'RWS buttons',
    () => (
      <Grid style={{ paddingTop: '5rem' }} container alignContent='space-around' alignItems='stretch' justify='space-around' direction='row' spacing={2}>
        <Grid item xs={3}>
          <Button fullWidth label='Primary Contained' onClick={action('Clicked primary button')} variant='contained' color='primary' />
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth label='Primary Outlined' onClick={action('Clicked primary button')} variant='outlined' color='primary' />
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth label='Secondary Contained' onClick={action('Clicked secondary button')} variant='contained' color='secondary' />
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth label='Secondary Outlined' onClick={action('Clicked secondary button')} variant='outlined' color='secondary' />
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth disabled label='Primary Contained' onClick={action('Clicked primary button')} variant='contained' color='primary' />
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth disabled label='Primary Outlined' onClick={action('Clicked primary button')} variant='outlined' color='primary' />
        </Grid>

        <Grid item xs={3}>
          <Button fullWidth disabled label='Secondary Contained' onClick={action('Clicked secondary button')} variant='contained' color='secondary' />
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth disabled label='Secondary Outlined' onClick={action('Clicked secondary button')} variant='outlined' color='secondary' />
        </Grid>
      </Grid>
    ),
  );