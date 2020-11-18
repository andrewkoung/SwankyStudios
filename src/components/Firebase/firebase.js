import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/firestore'; 

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

class Firebase {
    constructor() {
        app.initializeApp(config); 
        this.analytics = app.analytics();
        this.auth = app.auth();
        this.db = app.database();
        this.storage = app.storage();
        this.functions = app.functions();
        this.firestore = app.firestore();
    }
}

export default Firebase;