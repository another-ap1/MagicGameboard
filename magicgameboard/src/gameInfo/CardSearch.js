"use client";
import React,{useState} from "react";

// magic the gathering api for getting card info
import MagicApi from "../MagicApi";

//components
import CardSearchForm from "../forms/CardSearchForm";

//styles
import "../styles/cardSearch.css";

const CardSearch = () => {

    //setting state for both card info and loading state
    const [cards, setCards] = useState([]);
    const [loading,setLoading] = useState(true);
    
    //function for getting card information from the api
    const findCards = async (data) => {
        let res = await MagicApi.searchCard(data);
        setCards(res.data.data);
        setLoading(false)
    }

    //if waiting or searching for data this will render
    if(loading){
      return(
          <div className="cardSearch">
              <CardSearchForm findCards={findCards}/>
          </div>
      )
    }

    //turning loading to false when data has been recived and this will render.
    return (
        <div>
            <div className="cardSearch">
                <CardSearchForm findCards={findCards}/>
            </div>

                <div className="results">
                    {cards.map((card)=>{
                        return <img src={card.image_uris.normal}
                                    alt="imgResult" 
                                    key={crypto.randomUUID()}
                                    className="card"/>
                    })}
                </div>
        
        </div>
    );
    }

export default CardSearch;