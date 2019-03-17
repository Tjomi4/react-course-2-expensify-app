import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });      
//   });
//   console.log(expenses);
// }).catch((e) => {

// });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });      
//   });
//   console.log(expenses);
// });
// database.ref('expenses').push({
//   description: 'Rent bill',
//   note: 'This is my last rent bill',
//   amount: 109500,
//   createdAt: 987459834758,
// });

// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data', e);
// });


// database.ref().set({
//   name: 'Artems Boroviks',
//   age: 29,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   location: {
//     city: 'Kirpene',
//     country: 'Latvia'
//   }
// }).then(()=> {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('Error while saving', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazone',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('data removed');
// }).catch((e) => {
//   console.log('Error:', e);
// });
