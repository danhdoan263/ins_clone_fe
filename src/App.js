import HeaderNav from "container/HeaderNav/HeaderNav";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeUser from "container/HomeUser/HomeUser";
import MessUser from "container/MessUser";
function App() {
  return (
    <div className="App">
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
