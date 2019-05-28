import React, { FC } from 'react';
import css from 'styles/modules/app.module.scss';

import { Button } from '@rws-air/ui-components'
import { Logo } from '@rws-air/ui-components'

const Home: FC = () => {
  return (
    <div className={css.app}>
      <header className={css.header}>
        <Button variant='contained' color='primary' label='button' onClick={() => console.log('void')} />
        <Logo />
      </header>
    </div>
  );
}

export default Home;
