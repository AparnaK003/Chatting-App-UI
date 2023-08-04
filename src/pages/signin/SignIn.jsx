import React, { useState } from 'react'
import './signin.css'
import Topbar from '../../components/topbar/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate()
  const handleclick = (event)=>{
    event.preventDefault();
    navigate('/chat')
  }
  const handleback = ()=>{
    navigate('/home')
  }
  const isInputEmpty = inputValue.trim() === '';
  return (
    <div className='signinContainer'>
    <div className='signin'>
        <Topbar/>
        <div className='leftarrow'><FontAwesomeIcon onClick={handleback} className='back' icon={faArrowLeftLong} /></div>
        
        <div className='loginform'>
            <p className='p1'>Log in to Mokx</p>
            <p className='p2'>Welcome back! Sign in using your social account or email to continue us
            </p>
            {/* <p className='p3'></p> */}
            <div className='logos'>
              <div className='logo'><img src="../images/fb.png" alt="fb" /></div>
              <div className='logo'><img src="../images/gmail.png" alt="gmail" /></div>
              <div className='logo'><img src="../images/apple.png" alt="apple" /></div>
            </div>
            <p className='or'><span>OR</span></p>
            <form onSubmit={handleclick}>
              <div className='inputContainer'>
              <div className='emaildiv'>
                <label>Your email</label>
                <input value={inputValue} onChange={handleInputChange} type="email" required />
              </div>
              <div className='emaildiv'>
              <label>Password</label>
                <input type="password" />
              </div>
              </div>
              <div className='btn'>
                <button className={`my-button ${isInputEmpty ? 'disabled' : ''}`} disabled={isInputEmpty}>Login</button>
                <p>Forgot Password?</p>
              </div>
              
            </form>
            
        </div>
        </div>
    </div>
  )
}

export default SignIn