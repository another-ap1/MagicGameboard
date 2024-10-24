import React,{useState} from "react";
import {Card, CardImg, CardBody} from "reactstrap";
import { Popover } from "react-tiny-popover";

//components
import CommanderDMG from "./CommanderDMG";

//styles
import "../styles/commander.css";

const CommanderFound = ({card, numPlayers}) => {

    //setting state for popover
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    //setting state for life starts at 40
    const [life, setLife] = useState(40);

    //functions for increasing and decreasing life total.
    const decreaseLife = () => setLife(life - 1);
    const increaseLife = () => setLife(life + 1);
    
    const commanderDmgTracker = Array.from({length:Number(numPlayers)}, (_,index) => (
        <CommanderDMG /> 
    ));

    return(
        <Card className="text-center userGameboard">
                <CardImg 
                    alt=""
                    src={card.img}
                    width="100%"
                    className="commanderImg"
                />
                <CardBody>

                    <div className="lifeCounter">
                        <button onClick={decreaseLife}>☠️</button> {life} <button onClick={increaseLife}>❤️</button>
                    </div>

                    <Popover
                        isOpen={isPopoverOpen}
                        positions={['top','bottom','left','right']}
                        content={<Card className="commanderDmgCard">{commanderDmgTracker}</Card>}>

                        <button className="commanderDmgBtn"><div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                            Commander Damage
                        </div></button>

                    </Popover>

                </CardBody>
        </Card>
    )
}

export default CommanderFound;