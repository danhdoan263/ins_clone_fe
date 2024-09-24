import React from 'react'
import './Poster.css'
import user from 'assets/account.png'

import PostImgUserName from 'components/PostImgUserName/PostImgUserName'
import FooterReaction from 'components/FooterReaction/FooterReaction'
const Poster = () => {
    return (
        <div className="Poster">
            <div className="Poster-Header">
                <PostImgUserName />
            </div>
            <div className="Post-img">
                <img src={user} alt="" />
            </div>
            <div className="Poster-fotter">
                <FooterReaction />
            </div>
        </div>
    )
}

export default Poster