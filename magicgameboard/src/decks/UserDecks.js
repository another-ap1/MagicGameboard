import React from 'react';

//components
import Deck from './Deck';
import DeckForm from "../forms/DeckForm"

function UserDecks({username, id}) {
    return (
        <div>
            <div>
                
                <Deck id={id} />
                
            </div>
            <div>

                <DeckForm id={id}/>

            </div>
        </div>
    )
}

export default UserDecks;