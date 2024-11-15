import React, { useEffect, useState } from 'react';
import './HomeUser.css';
import StorySection from 'container/HomeUser/chunk/StorySection/StorySection';
import Poster from 'container/HomeUser/chunk/Poster/Poster';
import Secondary from 'container/HomeUser/chunk/Secondary/Secondary';
import { loadingPostAPI } from 'apis/loadingPostAPI';
const HomeUser = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await loadingPostAPI();

      const sortedData = response.data.sort(
        (a, b) => b.created_at - a.created_at
      );
      setPost(sortedData);
    };
    fetchData();
  }, []);

  return (
    <div className="Home-user">
      <StorySection />
      <Secondary />
      <div className="Poster-list">
        {post.map((post) => (
          <Poster
            key={post._id}
            postInfo={{
              id: post._id,
              user_id: post.user_id,
              fullname: post.full_name,
              post_image: post.image_url,
              post_caption: post.caption,
              profile_url_img: post.profile_url_img,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeUser;
