import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  const navigate = useNavigate()
  const handleSignUp = ()=>{
    navigate('/signup')
  }
  const handleLogIn = ()=>{
    navigate('/signin')
  }

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second (60000 milliseconds = 1 minute)
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 60000);
        return () => {
            clearInterval(intervalId);
          };
        }, []);


  return (
    <div className='homeContainer'>
        <div className='home'>

            {/* Topbar */}
        <div className='topbar1'>
            <h3 className='time1'>
               {currentTime.toLocaleTimeString().substring(0,5)}
            </h3>
        
           <div className='top_icons1'>
             <FontAwesomeIcon icon={faSignal} />
             <FontAwesomeIcon icon={faWifi} />
             <FontAwesomeIcon icon={faBatteryFull} />
           </div>
        </div>

        {/*  */}
        {/* yoga image */}
        <img src="../images/namaste.png" width='100%' alt="namaste" />
        <div className="overContainer1">

        <div className='overlapText1'>
        Arya, Vedic AI Guide
        </div>
        </div>

        {/* rest of the body */}
        <div className='body1'>
            <div className='description'>

            <h1>Discover the <br/> timeless wisdom of <br/><span>the Vedas.</span></h1>
            <p>Sign up and <span>journey through ancient knowledge with Arya 🌟</span></p>
            </div>
            <div className='logos1'>
              <div className='logo1'><img src="../images/fb.png" alt="fb" /></div>
              <div className='logo1'><img src="../images/gmail.png" alt="gmail" /></div>
              <div className='logo1'><img src="../images/apple.png" alt="apple" /></div>           
            </div>
            <div className='OR1'><p className='oreo1'><span className='orSpan1'>OR</span></p></div>
            <div className='btn1'>
                <button onClick={handleSignUp}>Sign up with mail</button>
                <p>Existing account? <span onClick={handleLogIn}>Log in</span></p>
              </div>
        </div>

        </div>
    </div>
  )
}

export default Home