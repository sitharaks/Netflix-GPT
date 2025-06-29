import React, { useState, useRef } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux';
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE, PHOTO_URL } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSignInForm);
  }
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = (e) => {
      const message =  checkValidation(emailRef.current.value, passwordRef.current.value);
      setErrorMessage(message);
      if(message) return;
      if(!isSignInForm){
          createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value, photoURL: PHOTO_URL
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
                     uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                  }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' ' + errorMessage);
        });
      }else{
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' ' + errorMessage);
        });
      }
    }
  return (
    <div>
      <Header />
      <div className='absolute' >
          
          <img src={BACKGROUND_IMAGE} alt="Netflix Logo"  />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black mx-auto my-200 right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className='font-bold text-3xl py-4  my-4'>{isSignInForm ? 'Sign In': 'Sign Up'}</h1>
          {!isSignInForm && 
              <input ref={nameRef} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700' required />    

          }
          <input ref={emailRef} type="email" placeholder="Email or phone number" className='p-4 my-4 w-full bg-gray-700' required />
          
          <input ref={passwordRef} type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700' required />
          {errorMessage && <p className='text-red-500 font-bold text-lg py-2'>{errorMessage.message}</p>}
          <button type="submit" className='bg-red-700 text-white p-4 my-6 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In': 'Sign Up'}</button>
          <p className='my-5 cursor-pointer' onClick={toggleSigninForm}> {isSignInForm ? 'New to Netflix? Sign up now': 'Already registered? Sign In now'}</p>
      </form>
    </div>
  )
}

export default Login
