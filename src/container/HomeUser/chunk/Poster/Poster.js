import './Poster.css';
import PosterHeader from 'container/HomeUser/chunk/Poster/PosterHeader/PosterHeader';
import FooterReaction from 'container/HomeUser/chunk/Poster/FooterReaction/FooterReaction';

const Poster = ({ postInfo }) => {
  const token = localStorage.getItem('token');

  return (
    <div className="Poster">
      <div className="Poster-Header">
        <PosterHeader
          avatar={postInfo.profile_url_img}
          fullname={postInfo.fullname}
          token={token}
          post_id={postInfo.id}
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
          token={token}
        />
      </div>
    </div>
  );
};

export default Poster;
