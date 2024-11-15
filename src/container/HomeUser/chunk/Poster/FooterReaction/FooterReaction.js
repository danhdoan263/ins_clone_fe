import React, { useEffect, useState } from 'react';
import './FooterReaction.css';
import { getLikePostAPI, likePostAPI } from 'apis/likePostAPI';
import { commentAPI, deleteCommentAPI } from 'apis/commentAPI';
import { showCommentAPI } from 'apis/showCommentAPI';
const FooterReaction = ({ postCaption, fullname, post_id, token }) => {
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState('');

  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [commented, setCommented] = useState([]);

  const [showInput, setShowInput] = useState(null); // Trạng thái để theo dõi hiển thị input
  const [replyText, setReplyText] = useState('');

  const user_id = localStorage.getItem('_id');

  const handleReplyClick = (index) => {
    setShowInput(index);
  };
  const handleAddReply = async (id) => {
    if (replyText.trim() !== '') {
      setReplyText('');
      setShowInput(null);
      const dataReplies = {
        post_id: post_id,
        user_id: user_id,
        comment: replyText.trim(),
        parent_id: id,
      };
      await commentAPI(post_id, dataReplies);
      handleGetComment();
    }
  };
  //getLike of the post

  useEffect(() => {
    const fetchLikePost = async () => {
      try {
        const res = await getLikePostAPI(post_id, token);
        setLike(res.likes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLikePost();
  }, [post_id, token]);

  const handleLikePost = async () => {
    try {
      const res = await likePostAPI(post_id, token);
      setLike(res.likes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleComment = async () => {
    try {
      const newComment = comment.trim();
      const commentData = {
        post_id: post_id,
        user_id: user_id,
        comment: newComment,
      };
      await commentAPI(post_id, commentData);
      setComment('');
      handleGetComment();
    } catch (e) {
      console.error(e);
    }
  };
  const handleDeleteComment = async (id) => {
    try {
      const res = await deleteCommentAPI(id);
      console.log(res);
      handleGetComment();
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetComment = async () => {
    const response = await showCommentAPI(post_id);

    const responseArray = Array.isArray(response) ? response : [];
    if (response) {
      setCommented(responseArray);
    }
  };

  const handleShowComment = async () => {
    try {
      if (!hasClicked) {
        setHasClicked(true);
        handleGetComment();
      }
      setIsCommentsVisible((prevState) => !prevState);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="footer-reaction">
        <div className="left-reaction">
          <div
            className="icon-Activity_Feed reaction-size"
            onClick={handleLikePost}
          ></div>
          <div className="icon-comment reaction-size"></div>
          <div className="icon-share reaction-size"></div>
        </div>
        <div className="right-reaction">
          <div className="icon-save reaction-size"></div>
        </div>
      </div>
      <div className="footer-liked">{like}</div>
      <div className="footer-comment">
        {/* activeUser === user's poster is comment or first comment added will have active to pin this commented*/}
        <div className="User-Comment">
          <span className="User-name">{fullname}</span>
          <span className="Comment">{postCaption}</span>
        </div>
        <div className="Show-comment" onClick={handleShowComment}>
          {isCommentsVisible ? 'Hide Comments' : 'View all Comment'}
        </div>
        {isCommentsVisible &&
          commented.map((comment, index) => (
            <div className="User-comment" key={comment._id}>
              <div className="Root-comment">{comment.comment}</div>
              <div className="Comment-action">
                <span onClick={() => handleReplyClick(index)}>reply</span>
                <span onClick={() => handleDeleteComment(comment._id)}>
                  delete
                </span>
              </div>
              {comment.replies.map((replies, index) => {
                return (
                  <>
                    <div className="Replies-comment" key={index}>
                      {replies.comment}
                    </div>
                  </>
                );
              })}
              {showInput === index && (
                <div>
                  <input
                    className="input-replies"
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your reply..."
                  />
                  <button onClick={() => handleAddReply(comment._id)}>
                    Post
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="footer-add-comment">
        <div className="list-enmoji">
          <div className="icon-emoji"></div>
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <div className="post-comment" onClick={handleComment}>
          Post
        </div>
      </div>
    </div>
  );
};

export default FooterReaction;
