//react/tools
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Navigation
import Navigation from "./Navigation";

//routes
import Welcome from "./Welcome";
import MainGameboard from "./gameboards/MainGameboard";
import Bruh from "./gameboards/Bruh";
import CardSearch from "./gameInfo/CardSearch";
import GameRules from "./gameInfo/GameRules";
import CreateUser from "./user/CreateUser";
import Profile from "./user/Profile";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route path="/" element={<Welcome />}></Route>

          <Route path="/mainGameboard/:numPlayers" element={<MainGameboard />}></Route>
          
          <Route path="/bruh" element={<Bruh />}></Route>

          <Route path="/user/:username/:firstname/:id" element={<Profile />}></Route>

          <Route path="/newUser" element={<CreateUser />}></Route>

          <Route path="/rules" element={<GameRules />}></Route>

          <Route path="/cardList" element={<CardSearch />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
