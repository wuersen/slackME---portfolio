import firebase from 'firebase'

firebase.initializeApp ({
  apiKey: "AIzaSyBUXd-laZ9bpR3rcT9FOkyfmAZlMXmP5XA",
    authDomain: "slameme-portfolio.firebaseapp.com",
    projectId: "slameme-portfolio",
    storageBucket: "slameme-portfolio.appspot.com",
    messagingSenderId: "568980845716",
    appId: "1:568980845716:web:1ba6ea7b43394b7374f081",
    measurementId: "G-KLRZP4H1FQ"

})

const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export default firestore;
export { auth, provider };


export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const channelRef = firestore.collection('channels').doc('channel')
                .collection('messages').doc('message');

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
      await channelRef.set({

      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    const documents = await firestore.doc(`channels/${uid}`).collection('messages').doc('message').get();

    return {
      uid,
      ...userDocument.data(),
      uid,
      ...documents.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
