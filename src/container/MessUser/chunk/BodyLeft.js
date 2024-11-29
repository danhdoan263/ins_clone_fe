import React from 'react';
import './BodyLeft.css';
import UserTarget from 'components/UserTarget/UserTarget';
const BodyLeft = ({ users, username, setChatWithUserId }) => {
  const handleSetChatWithUserId = (id) => {
    setChatWithUserId(id);
  };
  const user_id = localStorage.getItem('_id');
  return (
    <div className="Body-left">
      <div className="left-navUser">
        <div>
          <div className="left-navUser-account">{username}</div>
          <div className="icon-chevron-down"></div>
        </div>
        <div className="icon-newMessage"></div>
      </div>
      <div className="left-listUser">
        {users
          .filter((data) => data._id !== user_id)
          .map((data) => (
            <UserTarget
              key={data._id}
              user_img={data.profile_url_img}
              name={data.full_name}
              mess={data.username}
              className="user"
              onClick={() => {
                handleSetChatWithUserId(data._id);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default BodyLeft;
