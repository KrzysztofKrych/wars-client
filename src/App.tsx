import React from 'react';
import css from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from './store/config';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import { socket } from "./constants";
import User from './models/User';

function App() {
  socket.emit('join', {}, (error: unknown) => {
      console.log(error)
  });
  socket.on('usersRetrived', (users: User[]) => {
    console.log(users);
  })
  return (
    <Provider store={store}>
      <div className={css.App}>
        <ProfileSettings />
      </div>
    </Provider>
  );
}

export default App;
