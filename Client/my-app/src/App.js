import React from 'react';
import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Home from "./pages/Home";
import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Signup" exact element={<Signup/>}/>
      <Route path="/users" exact element={<Login/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
