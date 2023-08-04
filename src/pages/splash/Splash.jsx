import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './splash.css'

const Splash = () => {
  return (
    <div className='splashContainer'>

    <div className='splash'>
        <Topbar/>
        <div className='splashBody'>
        <img src="../images/logo.png" width="40%" alt="logo" />
        <p>Back to Vedas&#x950;</p>
        </div>
        
    </div>
    </div>
  )
}

export default Splash