import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Posts from './components/Posts';
import PostsCreate from './components/PostsCreate';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/create" component={PostsCreate} />          
          <Route path="/" component={Posts} />
        </Switch>        
      </div>
    </BrowserRouter>    
  </Provider>,
  document.querySelector('.container')
);
