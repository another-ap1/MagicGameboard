import React,{useState, useEffect} from "react";
import {UncontrolledDropdown, Button, DropdownToggle,
        DropdownMenu, DropdownItem} from "reactstrap";

//API
import UserApi from "../Api"
import MagicApi from "../MagicApi";

const ExistingUserDropdown = ({whenHaveCurrentUser}) => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [decks,setDecks] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await UserApi.getAll();
            setUsers(res.data);
        }
        getUsers();
    },[]);

    const gettingDecks = async (userInfo) => {
        const decks = await UserApi.getDecks(userInfo);
        await Promise.all(decks.map(async deck => 
            deck.img = await MagicApi.getCardImage(deck.commander)));
        console.log(decks);
        console.log(userInfo.username);
        setUser(userInfo.username);
        setDecks(decks);
        
    }

    const handleClick = (data) => {
        try{
            gettingDecks(data)
        }catch(e){
            console.alert(e);
        }
    }

    const handleSecondClick = (data) => {
        try{
            whenHaveCurrentUser(data);
        }catch(e){
            console.alert(e);
        }
    }

    //if no users display this dropdown to select a user
    if(users){
        return(
        <div>
            <div key={crypto.randomUUID()}>
                <UncontrolledDropdown>
                    <Button>Users</Button>
                    <DropdownToggle caret/>
                    <DropdownMenu>
                        {users.map((u) => {
                            return (
                                    <DropdownItem 
                                            key={crypto.randomUUID()} 
                                            onClick={() => handleClick(u)}>
                                            {u.username}
                                    </DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <div key={crypto.randomUUID()}>
                <UncontrolledDropdown>
                    <Button>Commander</Button>
                    <DropdownToggle caret/>
                    <DropdownMenu>
                        {decks.map((d) => {
                            return (
                                <DropdownItem 
                                    key={crypto.randomUUID()}
                                    onClick={() => handleSecondClick(d)}>
                                    {d.commander}
                                </DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        </div>
        
        )
    }    
}

export default ExistingUserDropdown;