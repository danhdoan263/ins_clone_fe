import React from 'react'
import './HomeUser.css'
import StorySection from 'components/StorySection/StorySection'
import Poster from 'components/Poster/Poster'
import Secondary from 'components/Secondary/Secondary'
const HomeUser = () => {
    return (
        <div className='Home-user'>
            <StorySection />
            <Poster />
            <Secondary />
        </div>
    )
}

export default HomeUser