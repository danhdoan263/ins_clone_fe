import React from 'react'
import './MainRouter.css'
import HomeUser from 'components/HomeUser/HomeUser'
const MainRouter = () => {
    return (
        <div className='MainRouter'>
            <HomeUser />
            <div className="Messenger"></div>
            <div className="User-profile"></div>
            <div className="Expoler"></div>
            <div className="My-profile"></div>
        </div>
    )
}

export default MainRouter