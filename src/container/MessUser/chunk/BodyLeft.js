import React from "react";
import "./BodyLeft.css";
import UserTarget from "components/UserTarget/UserTarget";
import mockdata from "data/mockData";
const BodyLeft = () => {
  return (
    <div className="Body-left">
      <div className="left-navUser">
        <div>
          <div className="left-navUser-account">shirleyromero</div>
          <div className="icon-chevron-down"></div>
        </div>
        <div className="icon-newMessage"></div>
      </div>
      <div className="left-listUser">
        {mockdata.map((data) => (
          <UserTarget user={data.thumbNails} name={data.name} />
        ))}
      </div>
    </div>
  );
};

export default BodyLeft;
