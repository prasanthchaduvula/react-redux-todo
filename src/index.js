import React from 'react';
import { render } from 'react-dom';

import '../src/assets/stylesheet/style.scss';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import store from './state/store';

render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);
