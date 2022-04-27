import React from 'react';
// import { Counter } from './features/counter/Counter.js';
import './App.css';
import Sidebar from "./Sidebar";
import Header from './Header';
import Feed from "./Feed";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';
function App() {
const user=useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      //user is logged in 
      dispatch(
        login({
          email: userAuth.email, 
          uid : userAuth.uid, 
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL,
        })
      )

    } else{
      //user is logged out
      dispatch(logout());
       
    }
  })
},[])
  return (
    <div className="app">
      <Header/>
      {!user ? <Login/> :(
      <div className='app__body'>
        <Sidebar /> 
        <Feed />
      <Widgets/>
      </div>
  )}
    </div>
  );
}

export default App;
