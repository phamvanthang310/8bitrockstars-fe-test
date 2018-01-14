import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

class FireBaseClient {
  constructor() {
    const config = {
      apiKey: 'AIzaSyAQoY79nbst_va7zUv86qY1GIFv-rRPn40',
      authDomain: 'bitrockstars.firebaseapp.com',
      databaseURL: 'https://bitrockstars.firebaseio.com',
      projectId: 'bitrockstars',
      storageBucket: 'bitrockstars.appspot.com',
      messagingSenderId: '696663277372'
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
  }

  readAddresses() {
    return Observable.fromPromise(this.database.ref('/addresses').once('value'))
      .pipe(
        map(snapshot => {
          let items = [];
          snapshot.forEach(function (childSnapshot) {
            let item = childSnapshot.val();
            item['key'] = childSnapshot.key;
            items.push(item);
          });
          return items;
        })
      );
  }

  writeAddress(address) {
    const addressRef = this.database.ref('/addresses').push();
    addressRef.set(address).then(res => {
      console.log('writeAddress :', res);
    });
  }
}

export default new FireBaseClient();