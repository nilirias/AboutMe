import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtm3GuNLv6rLv2J2ckncfoiEY1W_S9r6E",
  authDomain: "base-de-datos-e55c1.firebaseapp.com",
  databaseURL: "https://base-de-datos-e55c1.firebaseio.com",
  projectId: "base-de-datos-e55c1",
  storageBucket: "base-de-datos-e55c1.appspot.com",
  messagingSenderId: "706497131875"
});

export const db = firebaseApp.firestore();
