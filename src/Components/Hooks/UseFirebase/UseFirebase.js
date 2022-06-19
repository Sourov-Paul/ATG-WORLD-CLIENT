import { useEffect, useState } from "react";
import initializeFirebase from './../../Firebase/Firebase.init';
import { 
    getAuth,
     signInWithPopup,
     GoogleAuthProvider,
     onAuthStateChanged,
     signOut,  
     sendEmailVerification,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     updateProfile,
     FacebookAuthProvider,
     sendPasswordResetEmail 
     
    
    } from "firebase/auth";
  import { getFirestore} from "firebase/firestore";

initializeFirebase()
const UseFirebase = () => {
    
    const [user,setUser]=useState({})
    const [error, setError] = useState("");
    // loading handle
    const [isLoading, setIsLoading] = useState(true);
    // admin handle 
   
  

    const auth=getAuth()

    const googleProvider= new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider();
    const db=getFirestore()


    // handle login with google popup 
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{})
        .catch((error)=>{
            setError(error.message)
        })
    }

    // handele facebook signin 
    const signInWithFacebook=()=>{
        signInWithPopup(auth, facebookProvider)
  .then((result) => {})
  .catch((error) => {
    setError(error.message);
   
  });
    }

    // handle registation 
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            setError("");
            varifyEmail()
            const newUser = { email, displayName: name };
            setUser(newUser);
            saveUser(email,password,name);
           
            // saveUser(email,password,name)
            //    send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name,
            }
            )
              .then((result) => {})
              .catch((error) => {
                setError(error.message);
              });
            navigate("/");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
      };
      //    signIn handle============
      const logInUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            const destination = location?.state?.from || "/";
            navigate(destination);
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
      };
    
    // handle logOUT
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    //handle user state
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user)
            }else {
                setUser({});
              }
              setIsLoading(false);
        })
    },[auth])


// Verify Email
const varifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // console.log(result)
    });
  };

  // HANDLE FORGOT PASSWORD
    const forgotPassword=()=>{
      sendPasswordResetEmail(auth, user.email)
  .then(() => {
    alert('Recet Link Send')
  })
  .catch((error) => {
    setError(error.message);
   
  });
    }
  // save user database
  const saveUser=((email,password,displayName)=>{
    const user={email,password,displayName};
    fetch('https://morning-brook-05622.herokuapp.com/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(()=>{})
    
    .catch((error) => {
      setError(error.message);
    })
  })


    return{
        registerUser,
        logInUser,
        user,
        isLoading,
        error,
        saveUser,
        signInUsingGoogle,
        signInWithFacebook,
        varifyEmail,
        forgotPassword,
        logOut,
        db
    }
};

export default UseFirebase;