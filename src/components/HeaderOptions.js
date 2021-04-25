import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './HeaderOptions.css'

function HeaderOptions({Icon, text, AppsIcon, premium, onClick, avatar}) {

          //redux state
          const user = useSelector(selectUser)


          return (
                    <div onClick={onClick} className='headerOptions'>
                              {Icon && <Icon className='headerOptions__icon' style={{ fontSize: 28 }}/>}
                              {avatar && <Avatar className='headerOptions__avatarIcon' src={user?.photoUrl} style={{ fontSize: 28 }}>
                                          {user?.email[0]}
                              </Avatar>}
                              {AppsIcon && <AppsIcon className='headerOptions__AppIcon' style={{ fontSize: 28 }}/>}
                              <p>{text}</p>
                              {premium && <p className='premium'>{premium}</p>}
                    </div>
          )
}

export default HeaderOptions
