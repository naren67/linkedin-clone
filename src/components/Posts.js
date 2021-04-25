import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Posts.css'
import PostsButtons from './PostsButtons'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ReplyIcon from '@material-ui/icons/Reply';
import SendIcon from '@material-ui/icons/Send';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const Posts = forwardRef(({profileUrl, message, description, name, timestamp}, ref) => {

  //redux state
  const user = useSelector(selectUser)

          return (
                    <div className='posts' ref={ref}>
                              <div className="posts__header">
                                        <div className="posts__headerAvatar">
                                                  <Avatar src = {user?.photoUrl}>{user?.email[0]}</Avatar>
                                        </div>
                                        <div className="posts__headerInfo">
                                                  <p>{name}</p>
                                                  <p>{description}</p>
                                        </div>
                              </div>

                              <div className="posts__body">
                                        <p>{message}</p>
                              </div>

                              <div className="posts__buttons">
                                        <PostsButtons
                                         Icon = {ThumbUpAltIcon}
                                         name = 'Like'
                                        />
                                          <PostsButtons
                                         Icon = {ChatIcon}
                                         name = 'Comment'
                                        />
                                          <PostsButtons
                                         Icon = {ReplyIcon}
                                         name = 'Share'
                                        />
                                          <PostsButtons
                                         Icon = {SendIcon}
                                         name = 'Send'
                                        />
                                      
                              </div>
                    </div>
          )
})

export default Posts
