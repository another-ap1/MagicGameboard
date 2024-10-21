//Homepage that welcomes you to the game and you choose how many 
//players there is going to be
//will also be able to acess rules and card list before game starts

import React from "react";
import { Link } from "react-router-dom";
import {Row, Col, Button} from "reactstrap"

import "./styles/Welcome.css"

const Welcome = () => {
    return (
      <div>
          <h1 className="welcome">Welcome to your new favorite Magic The Gathering Gameboard</h1>
          
          <div className="container">
              
              <Button><Link to="/mainGameboard/2">2 Players</Link></Button>
              <Button><Link to="/mainGameboard/3">3 Players</Link></Button>
              <Button><Link to="/mainGameboard/4">4 Players</Link></Button>
              <Button><Link to="/mainGameboard/5">5 Players</Link></Button>
              <Button><Link to="/mainGameboard/6">6 Players</Link></Button>
              
          </div>

    </div>
  );
}

export default Welcome;