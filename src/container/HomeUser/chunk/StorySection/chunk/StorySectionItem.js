import React from "react";
import "./StorySectionItem.css";
const StorySectionItem = (props) => {
  return (
    <div className="item">
      <img src={props.avaStory} alt={props.nameUser} />
    </div>
  );
};

export default StorySectionItem;
