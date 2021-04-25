import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import './Login.css'
import {login} from '../features/userSlice'

function Login() {

          //state memory for login page
          const [name, setName] = useState('')
          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
          const [imageUrl, setImageUrl] = useState('')

          //dispatch to useSlice
          const dispatch = useDispatch()

           const loginToApp =(e)=>{
                     e.preventDefault()

                     //existing user
                     auth.signInWithEmailAndPassword(email, password)
                     .then((userAuth)=>{
                               dispatch(
                                         login({
                                                   email : userAuth.user.email,
                                                   uid : userAuth.user.uid,
                                                   displayName : userAuth.user.displayName,
                                                   profileUrl : userAuth.user.photoURL,
                                         })
                               )
                     })
           }

          const register =()=>{

                    //first check user name field //new user
                    if(!name){
                          return alert('please enter the name to register')
                    }

                    //next maintain email and password
                    auth.createUserWithEmailAndPassword(email, password)
                    .then(
                              (userAuth)=>{
                                        userAuth.user.updateProfile({
                                                  displayName : name,
                                                  photoURL : imageUrl,
                                        }) 
                                        .then(()=>{
                                                  dispatch(
                                                            login({
                                                                      email : userAuth.user.email,
                                                                      //id
                                                                      uid : userAuth.user.uid,
                                                                      displayName : name,
                                                                      photoURL : imageUrl,
                                                            })
                                                  )
                                        })
                              }
                    ).catch(error => alert(error))

          }

          return (
                    <div className='login'>
                              <img src="https://linked-in-logo.s3.us-east-2.amazonaws.com/logo.png" alt=""/>

                              <form action="">
                                        <input 
                                        // required
                                        value={name} onChange={e=>setName(e.target.value)} 
                                        className='login__inputOne' type="text" placeholder='full name (required if registering)'/>
                                     
                                      <input
                                        value={imageUrl} onChange={e=>setImageUrl(e.target.value)}
                                        className='login__input' type="text" placeholder='Profile pic URL (optional)'/>
                                      
                                        <input
                                        value={email} onChange={e=>setEmail(e.target.value)}
                                        className='login__input' type="text" placeholder='Email'/>
                                       
                                        <input
                                        value={password} onChange={e=>setPassword(e.target.value)}
                                        className='login__input' type="text" placeholder='Password'/>

                                        <button type='submit' onClick={loginToApp} className='login__signinButton'>Sign in</button>
                              </form>

                              <p>Not a member? <span className='login__register' onClick={register}>Register now</span></p>
                    </div>
          )
}

export default Login
