/* eslint-disable no-console */
import { Dropdownbutton } from '@rws-air/webcomponents';
import React, { FC } from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import {Box} from '@material-ui/core';

const options = [ 'short', 'Create merge commit', 'Squash and merge', 'This is a very long option that should produce a very long button because it has a lot of characters in a very long sentence' ];

const Home: FC = () => {
  return (
    <Box style={{marginTop: '25%'}}>
      <Dropdownbutton options={options} ButtonIcon={<CloudDownload/>} onClick={(prop: string) => console.log('I am clicked', prop)}/>
    </Box>
  );
};

export default Home;