import './StorySection.css';
import { useEffect, useRef } from 'react';

import StorySectionItem from './chunk/StorySectionItem';
const StorySection = () => {
  const scroll_x = useRef(null);
  const userStory = JSON.parse(localStorage.getItem('listUserFollowed'));

  useEffect(() => {
    const scrollStory = scroll_x.current;
    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollStory.scrollLeft += evt.deltaY;
    };
    scrollStory.addEventListener('wheel', handleWheel);
    return () => {
      scrollStory.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (
    <div className="Story-section">
      <div className="Story" ref={scroll_x}>
        {userStory.map((data) => {
          return (
            <div key={data._id}>
              <StorySectionItem avaStory={data.profile_url_img} id={data._id} />
              <p className="Short-name">{data.full_name}</p>
            </div>
          );
        })}
      </div>
      <div className="icon-chevron-right"></div>
    </div>
  );
};

export default StorySection;
