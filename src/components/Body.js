import React, { useEffect } from 'react'
import {useDispatch}from 'react-redux'
import Browse from './Browse'
import Login from './Login'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

const Body = () => {
  const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path: '/', 
            element: <Login/>
        },
        {
            path: '/browser', 
            element: <Browse/>
        }
    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL }= user;
          dispatch(addUser({uid, email, displayName, photoURL}));
        } else {
          dispatch(removeUser())
        }
      });
    },[])
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body