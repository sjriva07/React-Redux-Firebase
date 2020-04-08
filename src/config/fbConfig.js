import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



var fbConfig = {
    apiKey: "AIzaSyCzA4mnZpPrzihoQzjwIc6kEDNO4Ywid6A",
    authDomain: "web-apps-389b3.firebaseapp.com",
    databaseURL: "https://web-apps-389b3.firebaseio.com",
    projectId: "web-apps-389b3",
    storageBucket: "web-apps-389b3.appspot.com",
    messagingSenderId: "281296501074",
    appId: "1:281296501074:web:8ffc8900f3815a94db228b"
  };
  firebase.initializeApp(fbConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
 

  export default firebase;