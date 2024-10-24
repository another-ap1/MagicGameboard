import React from "react";
import {useParams} from "react-router-dom"
import { Row } from "reactstrap";

//components
import UserGameboard from "./UserGameboard";

//styles
import "../styles/mainGameboard.css"

const MainGameboard = () => {
  const {numPlayers} = useParams()

  //depending on how many players are passed more UserGameboard components will be displayed.
  const components = Array.from({length:Number(numPlayers)}, (_,index) => (
    <UserGameboard numPlayers={numPlayers}/> 
  ));

  return (
    <div className="text-center gameBoard">

        <Row>
          {components}
        </Row>

    </div>
  );
}

export default MainGameboard;