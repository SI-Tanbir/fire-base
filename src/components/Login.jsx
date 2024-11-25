

import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firbase_config';




const auth =getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {

  
  
  let [userid,setUser] =useState(null)
  const handleGoogleSignIn =()=>{


    
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user)
      // console.log("here it is",token)
      console.log("here it is",user)

      
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });


    
};


  return (


    <div>





        <button onClick={handleGoogleSignIn} >Google login</button>

        {
        userid && <div>
          <h2>Name:{userid.displayName}</h2>
        </div>
      }


    </div>
  )
}

export default Login