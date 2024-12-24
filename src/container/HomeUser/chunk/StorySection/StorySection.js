import './StorySection.css';
import { useEffect, useRef, useState } from 'react';

import StorySectionItem from './chunk/StorySectionItem';
import defaultAvatar from 'assets/account.png';

const StorySection = () => {
  const scroll_x = useRef(null);
  const userStory = JSON.parse(localStorage.getItem('listUserFollowed'));
  const [avatarUrls, setAvatarUrls] = useState({});

  useEffect(() => {
    console.log(userStory);

    const fetchAvatars = async () => {
      const urls = {};
      for (const data of userStory) {
        try {
          const response = await fetch(data.profile_url_img);
          if (response.ok) {
            const blob = await response.blob();
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            img.onload = () => {
              urls[data._id] = data.profile_url_img;
              setAvatarUrls((prevUrls) => ({
                ...prevUrls,
                [data._id]: data.profile_url_img,
              }));
            };
          } else {
            urls[data._id] = defaultAvatar;
            setAvatarUrls((prevUrls) => ({
              ...prevUrls,
              [data._id]: defaultAvatar,
            }));
          }
        } catch (error) {
          console.error('Error fetching avatar:', error);
          urls[data._id] = defaultAvatar;
          setAvatarUrls((prevUrls) => ({
            ...prevUrls,
            [data._id]: defaultAvatar,
          }));
        }
      }
    };

    fetchAvatars();
  }, []);

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
          const avatarUrl = avatarUrls[data._id] || defaultAvatar;
          return (
            <div key={data._id}>
              <StorySectionItem avaStory={avatarUrl} id={data._id} />
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
