import React from "react";
import "./HomeUser.css";
import StorySection from "container/HomeUser/StorySection/StorySection";
import Poster from "container/HomeUser/Poster/Poster";
import Secondary from "container/HomeUser/Secondary/Secondary";
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
