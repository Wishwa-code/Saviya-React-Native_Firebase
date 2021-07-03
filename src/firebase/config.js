import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChQ2FZJPtN-B59JUW-dFOFYxh-t8IVVeU',
  authDomain: 'saviya-415a5.firebaseapp.com',
  databaseURL: 'https://saviya-415a5-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'saviya-415a5',
  storageBucket: 'gs://saviya-415a5.appspot.com',
  messagingSenderId: 'toxigen024',
  appId: '1:850589715509:android:c493137f2f1accfd4a357c',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };