//The main gameboard where everyones individual gameboard will be displayed
// when you first get here each individual game board will be empty until you 
// choose who it is from a drop down.

import React from "react";
import {useParams} from "react-router-dom"

import UserGameboard from "./UserGameboard";
import DiceRoll from "../DiceRoll";

import "../styles/mainGameboard.css"
import { Row } from "reactstrap";

const MainGameboard = () => {
  const {numPlayers} = useParams()

  //depending on how many players are passed more UserGameboard components will be displayed.
  const components = Array.from({length:Number(numPlayers)}, (_,index) => (
    <UserGameboard /> 
  ));

  return (
    <div className="text-center">
      <h1>Magic The Gathering</h1>

      <Row>
        {components}
      </Row>

      <footer className="dice">
        <DiceRoll/>
      </footer>

    </div>
  );
}

export default MainGameboard;