import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCAU8RVDY-dbzIYgR_XLDHsCnE2lw5mqZk",
    authDomain: "chat-4d5d2.firebaseapp.com",
    databaseURL: "https://chat-4d5d2-default-rtdb.firebaseio.com",
    projectId: "chat-4d5d2",
    storageBucket: "chat-4d5d2.appspot.com",
    messagingSenderId: "698203396461",
    appId: "1:698203396461:web:a978a49083a6adc59ce264"
  };

export default firebase.initializeApp(firebaseConfig);