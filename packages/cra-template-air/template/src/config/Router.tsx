import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import routes from './routes';

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path={routes.rootPath} render={() => <div>HELLO WORLD!</div>} />
      <Route render={() => <div>HELLO WORLD!</div>} />
    </Switch>
  );
};

export default Router;
