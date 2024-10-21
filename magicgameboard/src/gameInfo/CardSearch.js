import React,{Suspense, useState} from "react";
import MagicApi from "../MagicApi";

import CardSearchForm from "../forms/CardSearchForm";

const CardSearch = () => {

    const [cards, setCards] = useState([]);
    const [loading,setLoading] = useState(true);
    

    const findCards = async (data) => {
        let res = await MagicApi.searchCard(data);
        setCards(res.data.data);
        setLoading(false)
    }

    if(loading){
      return(
          <div>
              <CardSearchForm findCards={findCards}/>
          </div>
      )
    }

    return (
        <div>
            <div>
                <CardSearchForm findCards={findCards}/>
            </div>
            
            <div>
                {cards.map((card)=>{
                  return <img src={card.image_uris.normal} key={crypto.randomUUID()}/>
                })}
            </div>
            
        </div>
    );
    }

export default CardSearch;