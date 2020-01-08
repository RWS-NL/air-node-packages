import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { baseRWSTheme } from '../utils/theme';
import { ActionBar } from '@rws-air/webcomponents';
import { action } from '@storybook/addon-actions';
import { Typography } from '@material-ui/core';

storiesOf('Action Bar', module)
  .addDecorator(muiTheme([ baseRWSTheme ]))
  .add(
    'Action Bar Without Button',
    () => (
      <ActionBar title='Action Bar'/>
    )
  )
  .add(
    'Action Bar With Button',
    () => (
      <ActionBar title='Action Bar' shouldHaveButton buttonAction={action('Clicked Action Bar Button')} buttonLabel='Click Me' />
    )
  )
  .add(
    'Action Bar With React component title',
    () => (
      <ActionBar title={<Typography variant='h3' color='primary' >I am using Typography</Typography>} shouldHaveButton buttonAction={action('Clicked Action Bar Button')} buttonLabel='Click Me' />
    )
  );