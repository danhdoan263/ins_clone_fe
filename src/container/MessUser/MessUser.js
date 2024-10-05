import React from "react";
import "./MessUser.css";
import BodyLeft from "container/MessUser/chunk/BodyLeft";
import BodyRight from "container/MessUser/chunk/BodyRight";
const MessUser = () => {
  return (
    <div className="Mess-user">
      <div className="Mess-body">
        {/* Left for the userlist */}
        <BodyLeft />

        {/* right for the chat */}

        <BodyRight />
      </div>
    </div>
  );
};

export default MessUser;
