import firebase from 'firebase/app';

require('firebase/auth');

export default class firebaseService {
  static init() {
    const config = {
      apiKey: 'AIzaSyCpC-Eto-OWRR-in09dYeAaXzGI5DNEcyw',
      authDomain: 'selection-5744a.firebaseapp.com',
      databaseURL: 'https://selection-5744a.firebaseio.com',
      projectId: 'selection-5744a',
      storageBucket: 'selection-5744a.appspot.com',
      messagingSenderId: '84536419142',
    };
    firebase.initializeApp(config);
  }

  static async signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  static async signOut() {
    return firebase.auth().signOut();
  }

  static async getUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(Error('user.not.logged'));
        }
      });
    });
  }
}
