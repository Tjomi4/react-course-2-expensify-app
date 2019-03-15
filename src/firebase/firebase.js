import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDbULOXF2mN1fBv0Ap4HbqOL_YX3pFcuP4",
  authDomain: "expensify-96b71.firebaseapp.com",
  databaseURL: "https://expensify-96b71.firebaseio.com",
  projectId: "expensify-96b71",
  storageBucket: "expensify-96b71.appspot.com",
  messagingSenderId: "643852502140"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Artems Boroviks'
});