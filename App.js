import React from 'react';
import { Provider } from 'react-redux';

import Main from './Main';
import { configureStore } from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}
