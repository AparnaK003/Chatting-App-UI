import React, {useEffect, useRef, useState} from 'react'
import './chat.css'
import Topbar from '../../components/topbar/Topbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the message list whenever new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, sender: 'user', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMessage('');
  };

  const navigate= useNavigate()
  const handleback = ()=>{
    navigate('/home')
  }
  return (
    <div className='chatContainer'>
      <div className='chat'>
        <Topbar/>

        <div className='profile'>
          <FontAwesomeIcon onClick={handleback} icon={faArrowLeftLong} />
          <img src="../images/dp.png" alt="dp" />
          <div className='descContainer'>
            <div className='desc'> 
              <p className='lgDesc'>Arya</p>
              <p className='smDesc'>Vedic AI Bot</p>
            </div>
            <p className='lang'><button className='en eng'>A</button>/<button className='en hindi'>क</button></p>
          </div>
        </div>

        <div className='msgContainer' style={{backgroundColor:'	#e9f3fc', paddingBottom:'20px'}}>
            <div className='msg'>
             
            {/* messages */}
            <div className='msgbox'>
              <div className="default-message">
                <div className='smDP'><img src="../images/dp.png" width="80%" alt="dpSmall" /></div>
                <div className='msgDefault'>🙏 Namaste! I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns.
<br/><br/>Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.</div>
              </div>
              <div className='today'><p>Today</p></div>
            {messages.map((message, index) => (
                <div className='message' key={index}>
                  <div>
                  <p className='pmsg'>{message.text}</p>
                  <p className='time'>{message.timestamp}</p>
                  </div>
                </div>
              
              ))}

            <div ref={messagesEndRef} />
            </div>
       
          
            {/* input bar finish */}
            <div className='chatinput'>
              <input type="text" value={newMessage} placeholder="Write your message..." onChange={handleInputChange} />
              <button className='btnIn' onClick={handleSendMessage}><FontAwesomeIcon icon={faPaperPlane} /></button>
              <button id='rad' className='btnIn'><FontAwesomeIcon icon={faMicrophone} /></button>
            </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Chat