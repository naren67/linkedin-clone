import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

function Widgets() {

          //custom widgets using callback function
          const widgetsList = (heading, subtitle) =>(
                    <div className="widgets__article">
                              <div className="widgets__articleTitle"><FiberManualRecordOutlinedIcon className='widgets__dotIcon' style={{ fontSize: 8 }}/>{heading}</div>
                              <div className="widgets__articleViews">{subtitle}</div>
                    </div>
          )
          
          return (
                    <div className='widgets'>
                              <div className="widgets__header">
                                       <div className="widgets__topInfo">
                                       <p>Linkedin News</p>
                                        <InfoIcon className='widgets__headerInfoIcon' style={{ fontSize: 20 }}/>
                                       </div>

                                        {widgetsList('Hiring increases for IT jobs','2d ago - 7,842 readers')}
                                        {widgetsList('New rules for India','4d ago - 7,842 readers')}
                                        {widgetsList('Lockdown to hit economic growth','12d ago - 7,842 readers')}
                                        {widgetsList('Leasons from a heart attack goes viral','2d ago - 7,842 readers')}
                                        {widgetsList('getting a good job isnt easy','9d ago - 7,842 readers')}
                                        {widgetsList('How to land a good job in 2021','8d ago - 7,842 readers')}
                                        {widgetsList('Corona virus destroys so many lives here is why','5d ago - 7,842 readers')}
                              </div>

                              <div className="widgets__headerOne">
                                       <div className="widgets__topInfo">
                                       <p>Old Linkedin News</p>
                                        <InfoIcon className='widgets__headerInfoIcon' style={{ fontSize: 20 }}/>
                                       </div>

                                        {widgetsList('Lockdown to hit economic growth','2d ago - 7,842 readers')}
                                        {widgetsList('New rules for India','6d ago - 7,842 readers')}
                                        {widgetsList('How to land a good job in 2021','1d ago - 7,842 readers')}
                                        {widgetsList('Leasons from a heart attack goes viral','10d ago - 7,842 readers')}
                                        {widgetsList('getting a good job isnt easy','22d ago - 7,842 readers')}
                              </div>

                              <div className="widgets__headerOneThree">
                                       <div className="widgets__topInfo">
                                       <p>Most Viewed News</p>
                                        <InfoIcon className='widgets__headerInfoIcon' style={{ fontSize: 20 }}/>
                                       </div>

                                        {widgetsList('Corona virus destroys so many lives here is why','2d ago - 7,842 readers')}
                                        {widgetsList('New rules for India','2d ago - 7,842 readers')}
                                        {widgetsList('Lockdown to hit economic growth','2d ago - 7,842 readers')}
                                        {widgetsList('Leasons from a heart attack goes viral','2d ago - 7,842 readers')}
                                        {widgetsList('getting a good job isnt easy','2d ago - 7,842 readers')}
                                        {widgetsList('How to land a good job in 2021','2d ago - 7,842 readers')}
                              </div>

                              

                              
                    </div>
          )
}

export default Widgets
