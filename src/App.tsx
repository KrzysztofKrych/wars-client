import React from 'react';
import css from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from './store/config';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';

function App() {
  return (
    <Provider store={store}>
      <div className={css.App}>
        <ProfileSettings />
      </div>
    </Provider>
  );
}

export default App;
