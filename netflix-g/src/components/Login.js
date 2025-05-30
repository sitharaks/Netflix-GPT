import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSignInForm);
  }
  return (
    <div>
      <div className='absolute' >
          <Header />
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="Netflix Logo"  />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-200 right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className='font-bold text-3xl py-4  my-4'>{isSignInForm ? 'Sign In': 'Sign Up'}</h1>
          {!isSignInForm && 
              <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700' required />    

          }
          <input type="email" placeholder="Email or phone number" className='p-4 my-4 w-full bg-gray-700' required />
          
          <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700' required />
          <button type="submit" className='bg-red-700 text-white p-4 my-6 w-full rounded-lg'>{isSignInForm ? 'Sign In': 'Sign Up'}</button>
          <p className='my-5 cursor-pointer' onClick={toggleSigninForm}> {isSignInForm ? 'New to Netflix? Sign up now': 'Already registered? Sign In now'}</p>
      </form>
    </div>
  )
}

export default Login
