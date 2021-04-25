import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Posts from './Posts';
import { db } from '../firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move'

function Feed() {

   //use redux state
   const user = useSelector(selectUser)

          const [input, setInput] = useState('')
          const [posts ,setPosts] = useState([])

          useEffect(()=>{
               db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
                    setPosts(snapshot.docs.map((doc)=>({
                              data : doc.data(),
                              id : doc.id,
                    })))    
               })
          },[])

          const send =(e)=>{
                    e.preventDefault()

                    db.collection('posts').add({
                              name : user.displayName,
                              timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                              message : input,
                              description : 'sample description',
                              photoUrl : user.photoUrl || ''
                    })

                    setInput('')
          }
          
          return (
                    <div className='feed'>
                             <div className="feed__inputContainer">
                                       <div className="feed__avatarAndInput">
                                             <Avatar className='feed__avatar'/>
                                             <div className="feed__input">
                                                       <form action="">
                                                                 <input value= {input} onChange={e => setInput(e.target.value)} placeholder = 'start a post' type="text"/>
                                                                 <button onClick={send}>send</button>
                                                       </form>
                                             </div>
                                       </div>

                                       <div className="feed__inputOptions">
                                                 <InputOptions
                                                    Icon={PhotoSizeSelectActualIcon}
                                                    text='Photo'
                                                    color = 'skyblue'
                                                 />
                                                  <InputOptions
                                                    Icon={YouTubeIcon}
                                                    text='Video'
                                                    color = '#29bb89'
                                                 />
                                                  <InputOptions
                                                    Icon={EventAvailableIcon}
                                                    text='Events'
                                                    color = '#cdc733'
                                                 />
                                                  <InputOptions
                                                    Icon={AssignmentIcon}
                                                    text='Article'
                                                    color = 'orange'
                                                 />
                                       </div>
                             </div>

                                        {/* posts */}
                                        
                             <FlipMove>
                             {posts.map(({id, data : { name, message, photoUrl, description, timestamp}})=>(
                                          
                                          <Posts
                                          key = {id}
                                          description = {description}
                                          message = {message}
                                          profileUrl = {photoUrl}
                                          name = {name}
                                          timestamp = {timestamp}
                                       />
                              ))}
                             </FlipMove>
                                        

                    </div>
          )
}

export default Feed
