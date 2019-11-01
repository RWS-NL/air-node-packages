/* eslint-disable no-console */
import { Dropdownbutton, Button } from '@rws-air/webcomponents';
import React, { FC } from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { Grid } from '@material-ui/core';

const options = [ 'short', 'Create merge commit', 'Squash and merge', 'This is a very long option that should produce a very long button because it has a lot of characters in a very long sentence' ];

const Home: FC = () => {
  return (
    <Grid container direction='row'>
      <Grid item style={{ marginRight: '1%', width: '30vw' }}>
        <Dropdownbutton disabledOptionIds={[ 0, 1 ]} defaultOptionId={3} options={options} ButtonIcon={<CloudDownload />} onClick={(prop: string) => console.log('I am clicked', prop)} />
      </Grid>
      <Grid item style={{ marginRight: '1%' }}>
        <Button fullWidth variant='contained' color='primary' onClick={() => undefined} label='test' />
      </Grid>
    </Grid>
  );
};

export default Home;