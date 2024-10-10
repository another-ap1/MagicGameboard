//Usergameboard will be displayed on the main gameboard customized to each user.
//display username and record a drop down of the commanders they have
// based on the commander they choose image information will be retreived from API and 
// displayed as backgroud

import React, {useState,useEffect} from "react";
import {Card,  
        CardBody, 
        CardTitle, 
        CardImg, 
        CardImgOverlay, 
        Col,
        Form,
        FormGroup,
        Label,
        Input,
        Button} from "reactstrap"
import axios from "axios";
import MagicApi from "../MagicApi";
import CommanderForm from "./CommanderForm";

import "../styles/userGameboard.css"



function UserGameboard() {
    const INITIAL_VALUES= {
        commander: "",
        username: ""
    }
    const [formData, setFormData] = useState(INITIAL_VALUES)
    const [card, setCard] = useState(null);

    
    async function getCardData({commander}){
        const cardData = await MagicApi.getCards(commander);
        setCard(cardData);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            console.log(getCardData(formData));
        } catch(e){
            console.error("unable to collect data:", e)
        }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    };

    if(!card){
        return (
            <Col>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Commander</Label>
                        <Input 
                            type="text"
                            name="commander"
                            id="commander"
                            value={formData.commander}
                            onChange={handleChange}
                            required/>
                        <Label>Player</Label>
                    </FormGroup>
                    <FormGroup>
                    <Input 
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        required/>
                    </FormGroup>
                    <Button type="submit">Find</Button>
                </Form>
            </Col>
        )
    }

    return (
        <Col sm="3">
            <Card className="text-center userGameboard">
                <CardImgOverlay>
                    <CardImg 
                        alt=""
                        src=""
                        width="100%"
                    />
                    <CardTitle tag="h3">{formData.username}</CardTitle>
                    <CardBody>
                        <div className="life">
                            <button>-</button><input type="int"></input><button>+</button>
                        </div>
                    </CardBody>
                </CardImgOverlay>
            </Card>
        </Col>
  );
}

export default UserGameboard;