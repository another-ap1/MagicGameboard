import React,{useState, useEffect} from "react";
import {Row, Card, CardTitle, CardBody, Button, CardImgOverlay, CardImg} from "reactstrap"

//API
import UserApi from '../Api';
import MagicApi from "../MagicApi";

const Deck = ({id}) => {
    //setting state for decks and if we are loading data from db
    const [decks, setDecks] = useState();
    const [loading, setLoading] = useState(true);

    //function for deleting current users deck from list
    const deleteDeck = async (data) => {
        try{
            const res = await UserApi.deleteDeck(data);
            setDecks(decks.splice(res.data.commander, 1));
        }catch(e){
            console.alert(e);
        }
    }
    
    //useEffect for fetching deck data for user from database
    useEffect(()=>{
        const gettingDecks = async (userInfo) => {
            const decks = await UserApi.getDecks(userInfo);
            await Promise.all(decks.map(async deck => 
                deck.img = await MagicApi.getCardImage(deck.commander)));
            setDecks(decks);
            setLoading(false);
        }
        gettingDecks({id})
    },[]);

    //while "loading" do this
    if(loading) return <div><h3>Fetching Your Commander Decks...</h3></div>

    //when all done loading data from db this will render
    return(
    
        <Row>
            
            {decks.map(deck => {
                return (
                <Card key={crypto.randomUUID()}>

                        <CardTitle><h3>{deck.commander}</h3></CardTitle>
                        <CardImg src={deck.img}></CardImg>
                        <CardBody>
                            <p>{deck.colors}</p>
                        </CardBody>
                        
                        <Button onClick={() => deleteDeck(deck)}>Delete</Button>
                    
                </Card>
                )
            })}
            
        </Row>
    )
    
    
}

export default Deck;