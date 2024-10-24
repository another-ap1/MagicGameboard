import React from "react";
import {useParams} from "react-router-dom"

//components
import EditUserForm from "../forms/EditUserForm";
import Decks from "../decks/Deck"
import DeckForm from "../forms/DeckForm";

//styles
import "../styles/profile.css"

const Profile = () => {
    //react-router-dom tools
    const {username, firstname, id} = useParams();
    return (
        <div className="profile">


            <div className="profileForm">

                <EditUserForm username={username}
                              firstname={firstname}
                              id={id}/>
                <DeckForm id={id}/>

            </div>
            <div>

                <Decks username={username} id={id}/>

            </div>
        </div>
    );
}

export default Profile;