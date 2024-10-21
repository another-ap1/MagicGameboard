//React and components
import React, {useState} from "react";
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay,Col,
    Form,FormGroup,Label,Input,Button} from "reactstrap"
import MagicApi from "../MagicApi";

//components
import NoUsernameForm from "../forms/NoUsernameForm";
import ExistingUserDropdown from "../forms/ExistingUserDropdown"
import CommanderFound from "./CommanderFound";

//CSS and images
import "../styles/userGameboard.css"

const UserGameboard = () => {
    const INITIAL_VALUES= {
        commander: "",
        username: ""
    }

    //setting state for card life and form
    const [formData, setFormData] = useState(INITIAL_VALUES)
    const [card, setCard] = useState(null);
    const [loading, setLoading]= useState(true);
    
    
    //making the api request to to the magicApi file
    async function getCardData({commander}){
        const cardData = await MagicApi.getCards(commander);
        console.log(cardData);
        setCard(cardData);
        setLoading(false);
    }

    function whenHaveCurrentUser(card){
        setCard(card)
        setLoading(true);
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