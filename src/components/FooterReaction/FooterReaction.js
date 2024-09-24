import React from 'react'
import './FooterReaction.css'
const FooterReaction = () => {
    return (
        <div>
            <div className="footer-reaction">
                <div className="left-reaction">
                    <div className="icon-Activity_Feed reaction-size"></div>
                    <div className="icon-comment reaction-size"></div>
                    <div className="icon-share reaction-size"></div>
                </div>
                <div className="right-reaction">
                    <div className="icon-save reaction-size"></div>
                </div>
            </div>
            <div className="footer-liked">1.069 likes</div>
            <div className="footer-comment">
                {/* activeUser === user's poster is comment or first comment added will have active to pin this commented*/}
                <div className="User-Comment">
                    <span className="User-name">terrylucas</span>
                    <span className="comment">Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque</span>
                </div>
                <details>
                    <summary>
                        View all 100 comments
                    </summary>
                    <ul>
                        <li>jasdalskdj</li>
                        <li>jasdalskdj</li>
                        <li>jasdalskdj</li>
                        <li>jasdalskdj</li>
                        <li>jasdalskdj</li>
                    </ul>
                </details>
            </div>
            <div className="footer-add-comment">
                <div className="list-enmoji">
                    <div className="icon-emoji"></div>
                </div>
                <input type="text" placeholder='Add a comment...' />
                <div className="post-comment">Post</div>
            </div>
        </div>
    )
}

export default FooterReaction