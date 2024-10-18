//React and components
import React, {useState,useEffect} from "react";
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay,Col,
    Row,Form,FormGroup,Label,Input,Button} from "reactstrap"
import MagicApi from "../MagicApi";

//CSS and images
import "../styles/userGameboard.css"
import sword from "../images/sword.jpg"

function UserGameboard() {
    const INITIAL_VALUES= {
        commander: "",
        username: ""
    }

    //setting state for card life and form
    const [formData, setFormData] = useState(INITIAL_VALUES)
    const [card, setCard] = useState(null);
    const [life, setLife] = useState(40);

    //functions for increasing and decreasing life total.
    const decreaseLife = () => setLife(life - 1);
    const increaseLife = () => setLife(life + 1);
    
    //making the api request to to the magicApi file
    async function getCardData({commander}){
        const cardData = await MagicApi.getCards(commander);
        console.log(cardData);
        setCard(cardData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            getCardData(formData);
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
            <Col sm="3">
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

                        <Input 
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required/>
                            
                    </FormGroup>
                    <Button type="submit">Enter the Battlefeild</Button>
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
                        src={card.image_uris.art_crop}
                        width="100%"
                    />
                    <CardTitle tag="h3">{card.name}</CardTitle>
                    <CardBody>
                        <div className="life">
                            <button onClick={decreaseLife}>-</button> {life} <button onClick={increaseLife}>+</button>
                        </div>
                    </CardBody>
                </CardImgOverlay>
            </Card>
        </Col>
  );
}

export default UserGameboard;