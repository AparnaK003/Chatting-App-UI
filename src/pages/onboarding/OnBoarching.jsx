import React, { useEffect, useState } from 'react'

import Home from '../home/Home';
import Splash from '../splash/Splash';

const OnBoarching = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task, such as loading data or assets
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the loading duration (in milliseconds) - here, it's set to 2 seconds (2000ms)
  }, []);

  return (
    <div className='onBoard'>
        {loading ? (
          <Splash/>
      ) : (
        <Home/>
      )}
    </div>
  )
}

export default OnBoarching