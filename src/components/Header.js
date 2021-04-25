import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOptions from './HeaderOptions';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import {logout, selectUser} from '../features/userSlice'


function Header() {


  const dispatch = useDispatch()

  const logoutFromApp =()=>{
    dispatch(logout())
    auth.signOut()
  }
          return (
                    <div className='header'>
                            <div className="header__left">
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Antu_linkedin.svg/640px-Antu_linkedin.svg.png" alt=""/>
                                      <div className="header__leftInput">
                                        <SearchIcon style={{ fontSize: 20 }}/>
                                        <input type="text" placeholder='Search'/>
                                      </div>
                            </div>
                            <div className="header__right">
                                       <HeaderOptions Icon={HomeIcon} text='Home'/> 
                                       <HeaderOptions Icon={PeopleAltIcon} text='Network'/>
                                       <HeaderOptions Icon={ShoppingBasketIcon} text='Jobs'/>
                                       <HeaderOptions Icon={TelegramIcon} text='Messaging'/>
                                       <HeaderOptions Icon={NotificationsIcon} text='Notifications'/>  
                                       <HeaderOptions avatar={true} text='naren' onClick={logoutFromApp}/>  
                                       <HeaderOptions Icon={AppsIcon} text='Menu'/> 
                                       <HeaderOptions premium='Try Premium free for 1 Month'/>    
                            </div> 
                    </div>
          )
}

export default Header
