import React from 'react'
import './InputOptions.css'

function InputOptions({Icon, text, color}) {
          return (
                    <div className='inputOptions'>
                              <Icon className='inputOptions__icon' style={{ fontSize: 28, color : color }}/>
                              <p>{text}</p>
                    </div>
          )
}

export default InputOptions
