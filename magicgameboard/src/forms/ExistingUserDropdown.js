import React,{useState, useEffect} from "react";
import {UncontrolledDropdown, Button, DropdownToggle,
        DropdownMenu, DropdownItem} from "reactstrap";

//API
import UserApi from "../Api"
import MagicApi from "../MagicApi";

const ExistingUserDropdown = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [decks,setDecks] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await UserApi.getAll();
            console.log(res.data)
            setUsers(res.data);
        }
        getUsers();
    },[]);

    const gettingDecks = async (userInfo) => {
        const decks = await UserApi.getDecks(userInfo);
        await Promise.all(decks.map(async deck => 
            deck.img = await MagicApi.getCardImage(deck.commander)));
        console.log(decks);
        setUser(userInfo.username);
        setDecks(decks);
        //setLoading(false);
    }

    const handleClick = (data) => {
        try{
            console.log(data);
            //gettingDecks(e.target)
        }catch(e){

        }
    }

    //if no users display this dropdown to select a user
    if(users){
        return(
        <div>
            <UncontrolledDropdown>
                <Button>Users</Button>
                <DropdownToggle caret/>
                <DropdownMenu>
                    {users.map((u) => {
                        return <DropdownItem key={crypto.randomUUID()} onClick={handleClick(u)}>{u.username}</DropdownItem>
                    })}
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
        
        )
    }

    //when a user is selected show that dropdown of commanders
    if(user && decks){
        return (
            <div>
                <UncontrolledDropdown>
                    <Button>Users</Button>
                    <DropdownToggle caret/>
                    <DropdownMenu>
                        {decks.map((d) => {
                            return <DropdownItem key={crypto.randomUUID()}>{d.commander}</DropdownItem>
                        })}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }     
}

export default ExistingUserDropdown;