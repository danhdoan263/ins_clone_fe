import React from "react";
import "./HomeUser.css";
import StorySection from "container/HomeUser/chunk/StorySection/StorySection";
import Poster from "container/HomeUser/chunk/Poster/Poster";
import Secondary from "container/HomeUser/chunk/Secondary/Secondary";
const HomeUser = () => {
  return (
    <div className="Home-user">
      <StorySection />
      <Poster />
      <Secondary />
    </div>
  );
};

export default HomeUser;
