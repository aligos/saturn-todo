import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import todoList from './components/todoList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={todoList}/>
  </Route>
);
