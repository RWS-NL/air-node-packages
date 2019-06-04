import React, { FC } from 'react';
import css from 'styles/modules/app.module.scss';

import { Button, Logo, ActionBar } from '@rws-air/ui-components'

const Home: FC = () => {
  return (
    <div className={css.app}>
      <header className={css.header}>
        <ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
        <Button variant='contained' color='primary' label='button' onClick={() => console.log('void')} />
        <Logo />
      </header>
    </div>
  );
}

export default Home;
