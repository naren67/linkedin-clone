import React from 'react'
import './PostsButtons.css'

function PostsButtons({Icon, name}) {
          return (
                    <div className='postsButtons'>
                              <Icon className='postsButtons__Icon'/>
                              <p>{name}</p>
                    </div>
          )
}

export default PostsButtons
