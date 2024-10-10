//The main gameboard where everyones individual gameboard will be displayed
// when you first get here each individual game board will be empty until you 
// choose who it is from a drop down.

import React from "react";

import UserGameboard from "./UserGameboard";

import "../styles/mainGameboard.css"
import { Row } from "reactstrap";

const MainGameboard = () => {
  return (
    <div className="text-center">
      <h1>main gameboard</h1>
      <Row>
        <UserGameboard />
        <UserGameboard />
        <UserGameboard />
        <UserGameboard />
      </Row>

    </div>
  );
}

export default MainGameboard;