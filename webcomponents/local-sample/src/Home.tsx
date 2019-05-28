import React, { FC } from 'react';
import css from 'styles/modules/app.module.scss';

import { Button } from '@rws-air/ui-components'

const Home: FC = () => {
  return (
    <div className={css.app}>
      <header className={css.header}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button label='button' onClick={() => console.log('void')} />
      </header>
    </div>
  );
}

export default Home;
