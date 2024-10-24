//React and components
import React, {useState} from "react";
import MagicApi from "../MagicApi";
import {Card, CardBody} from "reactstrap"

//components
import NoUsernameForm from "../forms/NoUsernameForm";
import ExistingUserDropdown from "../forms/ExistingUserDropdown"
import CommanderFound from "./CommanderFound";

//CSS and images
import "../styles/userGameboard.css"

const UserGameboard = ({numPlayers}) => {

    //setting state for card life and form
    const [card, setCard] = useState(null);
    const [loading, setLoading]= useState(true);
    
    //making the api request to to the magicApi file
    async function getCardData({commander}){
        const cardData = await MagicApi.getCards(commander);
        setCard({commander:cardData.name,
                img:cardData.image_uris.normal})
        setLoading(false);
    }

    function whenHaveCurrentUser(card){
        setCard(card)
        setLoading(false);
    }

    if(loading){
        return (
            <Card className="userGameboard">
                <CardBody>
                <NoUsernameForm getCardData={getCardData}/>
                <ExistingUserDropdown whenHaveCurrentUser={whenHaveCurrentUser}/>
                </CardBody>
            </Card>
        )
    }

    return (

        <CommanderFound  card={card} numPlayers={numPlayers}/>

    );
}

export default UserGameboard;