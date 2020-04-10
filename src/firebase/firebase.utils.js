import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqDilj0kKMh6ILiNyaIjfSJUYyb1bblUU",
    authDomain: "tribe-db.firebaseapp.com",
    databaseURL: "https://tribe-db.firebaseio.com",
    projectId: "tribe-db",
    storageBucket: "tribe-db.appspot.com",
    messagingSenderId: "228421973697",
    appId: "1:228421973697:web:cc15bd6abbdc6b57808640",
    measurementId: "G-049PCT3FH5"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //userAuth est un tableau d'informations fournies par Google après authentification avec un compte Google
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  //Snapshot affiche des parametres supplementaires pour savoir si l'utilisateur existe dans la BD par exemple
  const snapShot = await userRef.get();
  //S'il n'existe pas on va le créer, on recupère les valeurs displayName et email de userAuth
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//Auth pour l'authentification et Firestore pour le stockage des données
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
