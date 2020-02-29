import React from 'react';
import css from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from './store/config';

function App() {
  return (
    <Provider store={store}>
      <div className={css.App}>
        testest
      </div>
    </Provider>
  );
}

export default App;
