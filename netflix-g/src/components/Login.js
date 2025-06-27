import React, { useState, useRef } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSignInForm);
  }
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = (e) => {
      console.log('sign in button clicked');
      const message =  checkValidation(emailRef.current.value, passwordRef.current.value);
      setErrorMessage(message);
      console.log('error message', message);
      if(message) return;
      if(!isSignInForm){
          createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value, photoURL: "https://media.licdn.com/dms/image/v2/C5603AQHlr5PSrMz5Yg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1633375135780?e=1756339200&v=beta&t=oYboG5tgYK3FsgJSgsFNObzf5oMbHvVR6NOnJFHqlUs"
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch({
              type: 'addUser',
              payload: {
                uid,
                email,
                displayName,
                photoURL
              }
            });
            navigate('/browse');
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          console.log('User signed up successfully:', user);
          navigate('/');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' ' + errorMessage);
          // ..
        });
      }else{
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('User signed in successfully:', user);
                navigate('/browse');
                // ...
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
      <div className='absolute' >
          <Header />
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="Netflix Logo"  />
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
