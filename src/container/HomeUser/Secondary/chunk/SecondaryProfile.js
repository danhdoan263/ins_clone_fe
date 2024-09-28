import ButtonField from "components/ButtonField";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SecondaryProfile = ({ user }) => {
  return (
    <div className="Secondary-profile">
      <div>
        <div className="Profile-pic">
          <LazyLoadImage src={user} alt="" />
        </div>
        <div className="Profile-name">
          <div className="User-Name Secondary-text-heading">shirleyromero</div>
          <div className="Account-name Secondary-text-sub">Shirley romero</div>
        </div>
      </div>
      <ButtonField className="btn">Switch</ButtonField>
    </div>
  );
};

export default SecondaryProfile;
