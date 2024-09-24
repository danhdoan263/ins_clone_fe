import React from 'react'
import './HeaderNav.css'
import logo from 'assets/Logo.png'
import account_img from 'assets/account.png'
const HeaderNav = () => {
    return (
        <div className='HeaderNav'>
            <div className="nav-wrapper">
                <div className="wraper-logo">
                    <img src={logo} alt="" />
                </div>
                {/* ----------- */}
                <div className="wrapper-research">
                    <input type="text" placeholder='search' />
                </div>
                {/* ----------- */}
                <div className="wrapper-menu">
                    <div className="icon-Home_fill "></div>
                    <div className="icon-Messenger "></div>
                    <div className="icon-New_post "></div>
                    <div className="icon-Find_people "></div>
                    <div className="icon-Activity_Feed "></div>

                    <img src={account_img} alt="" />

                </div>
            </div>
        </div>
    )
}

export default HeaderNav