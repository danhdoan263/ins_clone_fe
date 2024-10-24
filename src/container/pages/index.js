import HeaderNav from 'container/HeaderNav/HeaderNav';
import HomeUser from 'container/HomeUser/HomeUser';
import MessUser from 'container/MessUser/MessUser';
import UserProfile from 'container/UserProfile/UserProfile';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const index = () => {
  const location = useLocation;
  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route
          path="/"
          element={<HomeUser key={location.pathname + location.search} />}
        />
        <Route path="MessUser" element={<MessUser />} />
        <Route path="newPost" />
        <Route path="findPeople" />
        <Route path="feed" />
        <Route path="userProfile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default index;
