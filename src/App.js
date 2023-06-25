import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './components/Homescreen';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase/firebase';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }else{//none
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/profile",
      element: <ProfileScreen />,
    },
  ]);
  
  return (
    <div className="app">
      <React.StrictMode>
      {!user?(<LoginScreen />):(
        <RouterProvider router={router} />
      )}
      </React.StrictMode>
      
    </div>
  );
}

export default App;
