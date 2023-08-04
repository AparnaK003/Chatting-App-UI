import React, { useEffect, useState } from 'react'
import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi , faBatteryFull, faSignal} from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  

    useEffect(() => {
        // Update the time every second (60000 milliseconds = 1 minute)
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
          };
        }, []);
  return (
    <div className='topbar'>
        <h3 className='time'>
        {currentTime.toLocaleTimeString().substring(0,5)}
        </h3>
        
        <div className='top_icons'>
        <FontAwesomeIcon icon={faSignal} />
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faBatteryFull} />
        </div>
    </div>
  )
}

export default Topbar