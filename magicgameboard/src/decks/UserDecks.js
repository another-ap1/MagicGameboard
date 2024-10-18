import React, { useState, useEffect } from 'react';
import {Row} from "reactstrap"

//components
import Deck from './Deck';
import DeckForm from "../forms/DeckForm"

function UserDecks({username, id}) {
    return (
        <div>
            <div>
                <Row>
                    <Deck id={id} />
                </Row>
            </div>
            <div>
                <DeckForm id={id}/>
            </div>
        </div>
    )
}

export default UserDecks;