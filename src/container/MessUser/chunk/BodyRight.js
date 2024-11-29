import React, { useEffect, useRef, useState } from 'react';
import './BodyRight.css';
const BodyRight = ({
  user_id,
  otherUser_id,
  roomId,
  messsages,
  setSendMessage,
}) => {
  const [textMessage, setTexMessage] = useState('');
  const [message, setMessage] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    setMessage(messsages);
  }, [messsages]);
  console.log(textMessage);

  const handleSendMessage = () => {
    const newMessage = {
      roomId: roomId,
      sender: user_id,
      otherUser_id: otherUser_id,
      newMessage: textMessage.trim(),
      sendMessage: true,
    };
    setSendMessage(newMessage);
    setTexMessage('');
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <div className="Body-right">
      <h2>ChatApp</h2>
      <div className="box-chat">
        {message.map((user) => {
          return (
            <div className="user-message">
              <div
                className={`message ${
                  user.sender !== otherUser_id ? 'otherUser' : ''
                }`}
              >
                {user.message}
              </div>
            </div>
          );
        })}
      </div>
      <div className="action-user">
        <input
          ref={inputRef}
          type="text"
          className="input-text"
          onChange={(e) => {
            setTexMessage(e.target.value);
          }}
        />
        <button className="btn-submit" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default BodyRight;
