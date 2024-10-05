import React from "react";
import "./Secondary.css";
import user from "assets/account.png";
import SecondaryProfile from "container/HomeUser/chunk/Secondary/chunk/SecondaryProfile";
import Suggestion from "container/HomeUser/chunk/Secondary/chunk/Suggestion";
import Follow from "container/HomeUser/chunk/Secondary/chunk/Follow";
import mocData from "data/mockData";
const Secondary = () => {
  return (
    <div className="Secondary">
      {/* Profile and switch account   */}
      {mocData
        .filter((data) => data.id === 1)
        .map((data) => (
          <SecondaryProfile user={data.thumbNails} name={data.name} />
        ))}
      <Suggestion />
      <Follow user={user} />
    </div>
  );
};

export default Secondary;
