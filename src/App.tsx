import React from 'react';
import css from './App.module.scss';
import { Provider, connect } from 'react-redux';
import { store, RootState } from './store/config';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import { socket } from "./constants";
import User from './models/User';
import CryptoJS from 'crypto-js';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  socket.emit('join', {}, (error: unknown) => {
      console.log(error)
  });
  socket.on('usersRetrived', (users: User[]) => {
    console.log(users);
  });

  socket.emit('login',  { email: "krzychu55561@wp.pl", password: CryptoJS.SHA256("qwerty1").toString() }, 
  (callback: User) => {
    console.log(callback);
  });
  return (
    <Provider store={store}>
      <div className={css.App}>
        <Wrapper />
      </div>
    </Provider>
  );
}


export default App;
