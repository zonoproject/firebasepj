import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyApv1cipu4uBoh1Fz74yV9ek4S4GPS_kEA",
    authDomain: "fir-pj-f00cf.firebaseapp.com",
    projectId: "fir-pj-f00cf",
    storageBucket: "fir-pj-f00cf.appspot.com",
    messagingSenderId: "647124263227",
    appId: "1:647124263227:web:8086f0230337f7f709d71e",
    measurementId: "G-9XTJFXTB75"
  })
}

export default firebase
