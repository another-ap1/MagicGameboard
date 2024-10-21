//react/tools
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Navigation
import Navigation from "./Navigation";

//routes
import Welcome from "./Welcome";
import MainGameboard from "./gameboards/MainGameboard";
import CardSearch from "./gameInfo/CardSearch";
import CreateUser from "./user/CreateUser";
import Profile from "./user/Profile";
import NotFound from "./NotFound";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route path="/" element={<Welcome />}></Route>

          <Route path="/mainGameboard/:numPlayers" element={<MainGameboard />}></Route>

          <Route path="/user/:username/:firstname/:id" element={<Profile />}></Route>

          <Route path="/newUser" element={<CreateUser />}></Route>

          <Route path="/cardList" element={<CardSearch />}></Route>

          <Route element={<NotFound/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
