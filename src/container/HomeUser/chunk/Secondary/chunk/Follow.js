import ButtonField from "components/ButtonField";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Follow = ({ user }) => {
  return (
    <div className="Follow">
      <div className="Follow-item">
        <div className="Follow-pic">
          <LazyLoadImage src={user} alt="" />
        </div>
        <div className="Follow-name-other">
          <div className="Follow-name Secondary-text-heading">terylucas</div>
          <div className="Follow-other Secondary-text-sub">
            Followed by terylucas + 2 more
          </div>
        </div>
        <ButtonField className="btn">Folow</ButtonField>
      </div>
    </div>
  );
};

export default Follow;
