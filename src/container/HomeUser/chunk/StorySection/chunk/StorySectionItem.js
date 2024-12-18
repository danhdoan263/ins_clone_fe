import React from 'react';
import './StorySectionItem.css';
import { useNavigate } from 'react-router-dom';
const StorySectionItem = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const handleForwardMessage = () => {
    navigate('/home/MessUser/', {
      state: {
        userId: props.id,
      },
    });
  };
  return (
    <div className="item" onClick={handleForwardMessage}>
      <img src={props.avaStory} alt={props.nameUser} />
    </div>
  );
};

export default StorySectionItem;
