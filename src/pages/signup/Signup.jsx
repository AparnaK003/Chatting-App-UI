import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import Topbar from '../../components/topbar/Topbar'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Signup = () => {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

    const navigate = useNavigate()

    const handleSubmit =(event)=>{
      event.preventDefault();
      if (!isValidEmail(email)) {
        setErrorMessage('Invalid email address');
        return;
      }
        navigate('/chat')
        setErrorMessage('');
        setEmail('');
    }

  const handleback = ()=>{
    navigate('/home')
  }

  const isValidEmail = (input) => {
    // A simple email validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  };

  return (
    <div className='signupContainer'>
    <div className='signup'>
        <Topbar/>
        <div className='leftarrow'>
            <FontAwesomeIcon onClick={handleback} icon={faArrowLeftLong} />
            <div><img src="../images/logo.png" alt="small_logo" /></div>
            
        </div>
        <div className='loginform'>
            <p className='p1'>Sign up with Email</p>
            <p className='p2'>Enter your  details and dive into a realm of ancient wisdom! 💫
            </p>
            <form onSubmit={handleSubmit}>
              <div className='inputContainer'>
              <div className='emaildiv'>
                <label>Your name</label>
                <input type="text" />
              </div>
              <div className='emaildiv'>
                <label htmlFor='emailIn' >Your email</label>
                <input value={email} id='emailIn' onChange={handleInputChange} className={errorMessage ? 'invalid-input' : ''}  type="email" />
                {errorMessage && <div className="error-message">{errorMessage}</div>}
              </div>
              <div className='emaildiv'>
              <label>Password</label>
                <input type="password" />
              </div>
              <div className='emaildiv'>
                <label>Confirm Password</label>
                <input type="password" />
              </div>
              </div>
              <div className='btn'>
                <button>Create an account</button>
              </div>
              
            </form>
            
        </div>
        </div>
    </div>
  )
}

export default Signup
