import { Grid } from '@material-ui/core';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { Dropdownbutton } from '@rws-air/webcomponents';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { muiTheme } from 'storybook-addon-material-ui';
import { baseRWSTheme } from '../utils/theme';

storiesOf('Dropdown Button', module)
  .addDecorator(muiTheme([ baseRWSTheme ]))
  .add(
    'Dropdown button',
    () => (
      <Grid style={{ paddingTop: '5rem' }} container alignContent='space-around' alignItems='stretch' justify='space-around' direction='row' spacing={2}>
        <Grid item xs={3}>
          <Dropdownbutton ButtonIcon={<CloudDownload />} onClick={action('Starting download...')} options={[ 'one', 'two' ]} />
        </Grid>
      </Grid>
    )
  );