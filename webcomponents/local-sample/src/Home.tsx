import React, { FC, Fragment } from 'react';
import css from 'styles/modules/app.module.scss';

import { Button, Logo, ActionBar } from '@rws-air/ui-components'

const Home: FC = () => {
  return (
    <Fragment>
      <div>
        <ActionBar title='ActionBar Title' buttonLabel='action-bar-button' buttonAction={() => console.log('test')} shouldHaveButton />
      </div>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.app}>
        <header className={css.header}>
          <Button variant='contained' color='primary' label='Contained Primary Button' onClick={() => console.log('Clicked Contained Primary Button')} />
          <Button variant='contained' color='secondary' label='Contained Secondary Button' onClick={() => console.log('Clicked Contained Secondary Button')} />
          <Button variant='outlined' color='primary' label='Outlined Primary Button' onClick={() => console.log('Clicked Outlined Primary Button')} />
          <Button variant='outlined' color='secondary' label='Outlined Secondary Button' onClick={() => console.log('Clicked Outlined Secondary Button')} />
        </header>
      </div>
    </Fragment>
  );
}

export default Home;
