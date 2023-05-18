import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB6fFWjE4aXtHqOUZezEiMR9pmJFCWgbE4',

  authDomain: 'restaurant-app-352b0.firebaseapp.com',

  projectId: 'restaurant-app-352b0',

  storageBucket: 'restaurant-app-352b0.appspot.com',

  messagingSenderId: '249053311909',

  appId: '1:249053311909:web:e810a381f25bea2d32ae4c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
