import HeaderNav from 'container/HeaderNav/HeaderNav'
import HomeUser from 'container/HomeUser/HomeUser'
import MessUser from 'container/MessUser/MessUser'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const index = () => {
    return (
        <div>
            <HeaderNav />
            <Routes>
                <Route path="/" element={<HomeUser />} />
                <Route path="/MessUser" element={<MessUser />} />
                <Route path="/newPost" />
                <Route path="/findPeople" />
                <Route path="/feed" />
            </Routes>
        </div>
    )
}

export default index