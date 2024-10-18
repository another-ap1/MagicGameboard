import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const DiceRoll = () => {
    const [die, setDie] = useState("Roll or Flip")

    const rollDice = (die) => {
        setDie(Math.floor(Math.random() * (die)+1))
    }
    const flipCoin = () => {
        setDie('flip');
        setTimeout(()=>{
            setDie(Math.random()<0.5?"Heads":"Tails")
        }, 600);
        ;
    }

    return (
        <div>
            <div className="resultArea">
                <h3>{die}</h3>
            </div>
            <ButtonGroup className="diceCoin">
                <Button onClick={() => rollDice(6)}>6 sided die</Button>
                <Button onClick={() => rollDice(20)}>20 sided die</Button>
                <Button onClick={flipCoin}>Flip a coin</Button>
            </ButtonGroup>
        </div>
    )
}

export default DiceRoll;