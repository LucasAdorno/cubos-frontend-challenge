import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/movie/:id' component={MoviePage} />
    </Switch>
  )
}

export default Routes;