import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import Browse from './Browse';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';



const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/browse",
        element: <Browse />,
    }
]);

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      dispatch(addUser({
         uid: uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }));
    } else {
      dispatch(removeUser());
    }
  });
}, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
