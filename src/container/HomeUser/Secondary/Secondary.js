import React from "react";
import "./Secondary.css";
import user from "assets/account.png";
import SecondaryProfile from "container/HomeUser/Secondary/chunk/SecondaryProfile";
import Suggestion from "container/HomeUser/Secondary/chunk/Suggestion";
import Follow from "container/HomeUser/Secondary/chunk/Follow";
const Secondary = () => {
  return (
    <div className="Secondary">
      {/* Profile and switch account   */}
      <SecondaryProfile user={user} />
      <Suggestion />
      <Follow user={user} />
    </div>
  );
};

export default Secondary;
