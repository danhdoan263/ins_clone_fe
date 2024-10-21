
import SignIn from "container/SignIn/SignIn";
import HomePage from 'container/pages';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "container/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
