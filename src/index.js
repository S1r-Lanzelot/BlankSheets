import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import BookNav from './components/bookNav';
import Account from './containers/accounts';
import SplashPage from './components/splashPage'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }>
    <BrowserRouter>
      <div>
        <BookNav />
        <Switch>
          <Route path="/Accounts" component={ Account } />
          <Route path="/" component={ SplashPage } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider >
  , document.querySelector('.container'));
