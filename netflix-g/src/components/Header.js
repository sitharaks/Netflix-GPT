import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGPTSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
  const handleGptSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }
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
    
     <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix Logo"/>
        {user && (
      <div className='flex  justify-between p-2'>
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGPTSearch ? 'HomePage': 'GPT Search'}</button>
        <img alt="user Icon" className="hidden md:block w-12 h-12  " src={user?.photoURL}/>
        <button onClick={handleSignOut} className="cursor-pointer font-bold text-white ">Sign Out</button>
      </div>
    )}
    </div>
    
  )
}

export default Header
