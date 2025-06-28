import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(addUser({
           uid: uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

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
        <img className="w-44" src={LOGO} alt="Netflix Logo"/>
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
