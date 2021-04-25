import React, { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux'
import Login from './components/Login';
import { auth } from './firebase';

function App() {

          //redux mode
        const user = useSelector(selectUser)

        const dispatch = useDispatch()

        //login and logout persistant
        useEffect(()=>{
           auth.onAuthStateChanged((userAuth)=>{
             if(userAuth){

               dispatch(
                 login({
                   email : userAuth.email,
                   uid : userAuth.uid,
                   displayName : userAuth.displayName,
                   photoUrl : userAuth.photoURL,
                 })
               )

             }
             else{
                  dispatch(logout())
             }

           })
        },[])
        

  return (
    <div className="app">
         { !user? (<Login/>) : (
           <>
             <Header/>
           <div className="app__home">
                 <Sidebar/>
                 <Feed/>
                 <Widgets/>
           </div>
           </>
         )}
    </div>
  );
}

export default App;
