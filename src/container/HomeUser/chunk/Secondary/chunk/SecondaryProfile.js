import ButtonField from "components/ButtonField";
import UserTarget from "components/UserTarget/UserTarget";
import React from "react";

const SecondaryProfile = ({ user, name }) => {
  return (
    <div className="Secondary-profile">
      <UserTarget user={user} name={name} />
      <ButtonField className="btn">Switch</ButtonField>
    </div>
  );
};

export default SecondaryProfile;
