import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  var config = {
    apiKey: 'AIzaSyBjzGVl_lZHW91gN1-cMcHYXSrb0tWw-WU',
    authDomain: "chatably-react.firebaseapp.com",
    databaseURL: "https://chatably-react.firebaseio.com",
    projectId: "chatably-react",
    storageBucket: "chatably-react.appspot.com",
    messagingSenderId: "97275499869"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="app">
        <RoomList firebase = { firebase }/>
      </div>
    );
  }
}

export default App;
