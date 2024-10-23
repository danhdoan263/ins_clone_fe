import './Poster.css';
import PostImgUserName from 'container/HomeUser/chunk/Poster/PostImgUserName/PostImgUserName';
import FooterReaction from 'container/HomeUser/chunk/Poster/FooterReaction/FooterReaction';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Poster = ({ postInfo }) => {
  return (
    <div className="Poster">
      <div className="Poster-Header">
        <PostImgUserName
          avatar={postInfo.profile_url_img}
          fullname={postInfo.fullname}
        />
      </div>
      <div className="Post-img">
        <img src={postInfo.post_image} alt="" />
      </div>
      <div className="Poster-fotter">
        <FooterReaction
          postCaption={postInfo.post_caption}
          fullname={postInfo.fullname}
          post_id={postInfo.id}
        />
      </div>
    </div>
  );
};

export default Poster;
