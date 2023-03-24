import React from 'react'
import arrow from '../../assets/connect/arrow.svg'
import './connect.css'

const Connect = () => {
  return (
    <div className='connect'>
        <div className='connect-text'>
            <span className='title'>Yaxshi tanlov - bu foydali tanlov</span>
            <h1>Unutilmas sayohatlar biz bilan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='chaman-btn'>Biz bilan bog'laning <img src={arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Connect