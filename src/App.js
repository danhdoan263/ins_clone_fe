// import HeaderNav from "container/HeaderNav/HeaderNav";

import { Route, Routes } from "react-router-dom";
import "./App.css";

import HeaderNav from "container/HeaderNav/HeaderNav";
import HomeUser from "container/HomeUser/HomeUser";
import LoginPage from "container/LoginPage/LoginPage";
import MessUser from "container/MessUser/MessUser";
function App() {
  return (
    <div className="App">
      <LoginPage />
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/MessUser" element={<MessUser />} />
        <Route path="/newPost" />
        <Route path="/findPeople" />
        <Route path="/feed" />
      </Routes>
    </div>
  );
}

export default App;
