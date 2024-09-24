import React from 'react'
import './Secondary.css'
import user from 'assets/account.png'
const Secondary = () => {
    return (
        <div className="Secondary">
            {/* Profile and switch account   */}
            <div className="Secondary-profile">
                <div>
                    <div className="Profile-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Profile-name">
                        <div className="User-Name Secondary-text-heading">shirleyromero</div>
                        <div className="Account-name Secondary-text-sub">Shirley romero</div>
                    </div>
                </div>

                <div className="Switch-btn btn">Switch</div>
            </div>
            <div className="Suggestion">
                <div className="Suggestion-title">Suggestions For You</div>
                <div className="Suggestion-btn">See All</div>
            </div>
            <div className="Follow">
                <div className="Follow-item">
                    <div className="Follow-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Follow-name-other">
                        <div className="Follow-name Secondary-text-heading">terylucas</div>
                        <div className="Follow-other Secondary-text-sub">Followed by terylucas + 2 more</div>
                    </div>
                    <div className="Follow-btn btn">Follow</div>
                </div>
                <div className="Follow-item">
                    <div className="Follow-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Follow-name-other">
                        <div className="Follow-name Secondary-text-heading">terylucas</div>
                        <div className="Follow-other Secondary-text-sub">Followed by terylucas + 2 more</div>
                    </div>
                    <div className="Follow-btn btn">Follow</div>
                </div> <div className="Follow-item">
                    <div className="Follow-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Follow-name-other">
                        <div className="Follow-name Secondary-text-heading">terylucas</div>
                        <div className="Follow-other Secondary-text-sub">Followed by terylucas + 2 more</div>
                    </div>
                    <div className="Follow-btn btn">Follow</div>
                </div> <div className="Follow-item">
                    <div className="Follow-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Follow-name-other">
                        <div className="Follow-name Secondary-text-heading">terylucas</div>
                        <div className="Follow-other Secondary-text-sub">Followed by terylucas + 2 more</div>
                    </div>
                    <div className="Follow-btn btn">Follow</div>
                </div> <div className="Follow-item">
                    <div className="Follow-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Follow-name-other">
                        <div className="Follow-name Secondary-text-heading">terylucas</div>
                        <div className="Follow-other Secondary-text-sub">Followed by terylucas + 2 more</div>
                    </div>
                    <div className="Follow-btn btn">Follow</div>
                </div> <div className="Follow-item">
                    <div className="Follow-pic">
                        <img src={user} alt="" />
                    </div>
                    <div className="Follow-name-other">
                        <div className="Follow-name Secondary-text-heading">terylucas</div>
                        <div className="Follow-other Secondary-text-sub">Followed by terylucas + 2 more</div>
                    </div>
                    <div className="Follow-btn btn">Follow</div>
                </div>
            </div>
        </div>
    )
}

export default Secondary