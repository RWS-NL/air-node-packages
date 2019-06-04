import React, { FC, Fragment } from 'react';
import css from 'styles/modules/app.module.scss';

import { Button, Logo, ActionBar } from '@rws-air/ui-components'

const Home: FC = () => {
  return (
    <Fragment>
      <div>
        <ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
      </div>
      <div className={css.app}>
        <header className={css.header}>
          <Button variant='contained' color='primary' label='button' onClick={() => console.log('void')} />
          <Logo />
        </header>
      </div>
    </Fragment>
  );
}

export default Home;
