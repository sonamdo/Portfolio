import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Main from '../components/Main';

const AppRouter = () => (
  <BrowserRouter>
    <div className = 'container'>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
