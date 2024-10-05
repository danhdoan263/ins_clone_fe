import "./StorySection.css";
import { useEffect, useRef } from "react";

import mockData from "data/mockData.js";
import StorySectionItem from "./chunk/StorySectionItem";
const StorySection = () => {
  console.log(mockData);

  const scroll_x = useRef(null);
  useEffect(() => {
    const scrollStory = scroll_x.current;
    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollStory.scrollLeft += evt.deltaY;
    };
    scrollStory.addEventListener("wheel", handleWheel);
    return () => {
      scrollStory.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className="Story-section">
      <div className="Story" ref={scroll_x}>
        {mockData.map((data) => {
          return (
            <div>
              <StorySectionItem avaStory={data.thumbNails} key={data.id} />
              <p className="Short-name">{data.name}</p>
            </div>
          );
        })}
      </div>
      <div className="icon-chevron-right"></div>
    </div>
  );
};

export default StorySection;
