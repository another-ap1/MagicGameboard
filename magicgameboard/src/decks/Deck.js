import React,{useState, useEffect} from "react";
import {Row, Card, CardTitle, CardBody, Button} from "reactstrap"

//API
//import MagicApi from '../MagicApi';
import UserApi from '../Api';

const Deck = ({id}) => {

    const [decks, setDecks] = useState();

    let userInfo = {id}

    const deleteDeck = (data) => {

    }

    const handleClick = (id) => {
        try{
            deleteDeck(id)
        }catch(e){
            console.alert(e);
        }
    }
    
    useEffect(()=>{
        const gettingDecks = async (userInfo) => {
            console.log(userInfo)
            const res = await UserApi.getDecks(userInfo);
            console.log(res.data)
            setDecks(res.data);
            console.log(decks);
        }
        gettingDecks(userInfo)
    },[]);

    if(!decks) return <div><h3>Fetching Your Commander Decks...</h3></div>

    return(
        <Row>
            {decks.map(d => {
                <Card key={crypto.randomUUID()}>
                    <CardTitle>{d.commander}</CardTitle>
                    <CardBody>
                        <h3>{d.colors}</h3>
                    </CardBody>
                    <Button onClick={() => handleClick(d.id)}>Delete</Button>
                </Card>
            })}
        </Row>
    )
}

export default Deck;