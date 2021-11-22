import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import React, { useState } from "react";
import AuthUser from "./AuthUser"

import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/SignUp"
import Discover from "./components/Discover"
import Account from "./components/Account"
import Guides from "./components/Guides"

function App() {
  const [user, setUser] = useState({ authenticated: false, userInfo: {} });

  return (
    <AuthUser.Provider value={{user,setUser}}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/guides" element={<Discover />}></Route>
          <Route path="/guides/:id" element={<Guides />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    </AuthUser.Provider>
  );
}

export default App;
