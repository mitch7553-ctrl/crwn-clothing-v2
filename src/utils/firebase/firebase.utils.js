import  {initializeApp} from 'firebase/app';
import {getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyCjxnQLkflQPd6hsHRb9Jxdi-BatGfY244",
  authDomain: "crwn-clothing-db-678eb.firebaseapp.com",
  projectId: "crwn-clothing-db-678eb",
  storageBucket: "crwn-clothing-db-678eb.firebasestorage.app",
  messagingSenderId: "86203166444",
  appId: "1:86203166444:web:0a5098654a81aa87417fc9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists);
    
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error)
        }
        return userDocRef;
    };

    // if user data does not exists 
    //create / set the document with the data from userauth in mmy colletion
    //if user data exists
    // return userDocRef

}