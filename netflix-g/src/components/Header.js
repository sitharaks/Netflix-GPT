import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    navigate('/')
}).catch((error) => {
  navigate('/error')
});

  }
  return (
    <>
     <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo"/>
    </div>
    {user && (
      <div className='flex p-2'>
      <img alt="user Icon" className=" w-12 h-12 absolute right-8 top-4 w-10 h-10 rounded-full" src={user?.photoURL}/>
          <button onClick={handleSignOut} className="cursor-pointer absolute right-8 top-16 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Sign Out</button>

      </div>
    )}
  
    </>
   
  )
}

export default Header
