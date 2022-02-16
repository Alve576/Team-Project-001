import { getAuth,GoogleAuthProvider , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, signInWithPopup } from "firebase/auth";

const useFirebase = () => {

   const auth = getAuth();


   const registerUser = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user  = userCredential.user;
        console.log(user,email,password)
      })
      .catch((error) => {
      })
};


    const login  = (email,password ) => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user  = userCredential.user;
        console.log(user)
        })
        .catch((error)=> { 
            
        })
    }

    return {
        login,
        registerUser
    }
}


export default useFirebase;