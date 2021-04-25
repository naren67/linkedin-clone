import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {

  //use redux state
  const user = useSelector(selectUser)



          //creating sidebar options using function arguments
             const recentItem =(topic)=>(
                    <div className="sidebar__recentItem">
                              <span className='sidebar__bottomHash'>#</span>
                              <p>{topic}</p>
                    </div>
             )

          return (
                    <div className='sidebar'>
                        <div className="sidebar__top">
                                 <div className="sidebar__secOne">
                                 <img src="https://img.freepik.com/free-vector/random-square-halftone-pattern_1409-1062.jpg?size=626&ext=jpg" alt=""/>
                                 <div className="sidebar__secOneInfo">

                                 <Avatar src={user.photoUrl} className='sidebar__avatar' src=''>
                                    {/* if no photo then add text to the image */}
                                    {user.email[0]}
                                 </Avatar>
                                 
                                  <p className='sidebar__welcome'>Welcome, {user.displayName}!</p>
                                  <p>{user.email}</p>
                                  <p >Add a photo</p>
                                 </div>
                                 </div>
                                 <div className="sidebar__secTwo">
                                           <div className="sidebar__connection">
                                           <p>Connections</p>
                                           <p>Group up network</p>
                                           </div>

                                           <div className="sidebar__addIcon">
                                           <PersonIcon className='addIcon'/>
                                           </div>
                                 </div>
                                 <div className="sidebar__secThree">
                                           <p>Access exclusive tools & insights</p>
                                         <div className="sidebar__card">
                                         <CreditCardIcon className='card__icon'/> 
                                           <p>Try Premium Free for 1 Month</p>
                                         </div>
                                 </div>
                                 <div className="sidebar__SecFour">
                                           
                                           <p className='sidebar__bookmark'> <BookmarkIcon className='bookmarkIcon'/>My items</p>
                                 </div>
                        </div>

                        <div className="sidebar__bottom">
                                  <p>Recent</p>
                                  {recentItem('design')}
                                  {recentItem('programming')}
                                  {recentItem('developer')}
                                  {recentItem('reactJs')}
                                  {recentItem('nodeJs')}
                                  {recentItem('softwareEngineering')}
                        </div>
                    </div>
          )
}

export default Sidebar
