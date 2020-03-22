import React from 'react';
import css from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from './store/config';
import { socket } from "./constants";
import User from './models/User';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <Provider store={store}>
      <div className={css.App}>
        <Wrapper />
      </div>
    </Provider>
  );
}


export default App;
