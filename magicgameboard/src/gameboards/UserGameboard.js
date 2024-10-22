//React and components
import React, {useState} from "react";
import MagicApi from "../MagicApi";
import {Col} from "reactstrap"

//components
import NoUsernameForm from "../forms/NoUsernameForm";
import ExistingUserDropdown from "../forms/ExistingUserDropdown"
import CommanderFound from "./CommanderFound";

//CSS and images
import "../styles/userGameboard.css"

const UserGameboard = () => {

    //setting state for card life and form
    const [card, setCard] = useState(null);
    const [loading, setLoading]= useState(true);
    
    //making the api request to to the magicApi file
    async function getCardData({commander}){
        const cardData = await MagicApi.getCards(commander);
        setCard({commander:cardData.name,
                img:cardData.image_uris.art_crop})
        console.log(cardData);
        setLoading(false);
    }

    function whenHaveCurrentUser(card){
        console.log("WE ARE HERE", card)
        setCard(card)
        setLoading(false);
    }

    if(loading){
        return (
            <Col sm="3">

                <NoUsernameForm getCardData={getCardData}/>

                <ExistingUserDropdown whenHaveCurrentUser={whenHaveCurrentUser}/>

            </Col>
        )
    }

    return (

        <CommanderFound  card={card}/>

    );
}

export default UserGameboard;