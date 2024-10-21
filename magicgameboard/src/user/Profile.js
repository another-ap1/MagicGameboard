import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import UserApi from "../Api";
import { Button } from "reactstrap";

//components
import UserForm from "../forms/UserForm";
import UserDecks from "../decks/UserDecks";


const Profile = () => {
  //react-router-dom tools
  const {username, firstname, id} = useParams();
  const navigate = useNavigate();
  
  //states
  const [formData, setFormData] = useState({username:username,firstname:firstname,id:id});

  //editing the current user then navigates to creating user
  const editUser = async (data) => {
    console.log(data);
    const edit = await UserApi.editUser(data);
    navigate("/newUser");
  }

  //Delete the current user navigates back to creating a user page
  const deleteUser = async (data) => {
    const res = await UserApi.deleteUser(data);
    navigate('/newUser');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      editUser(formData);
    }catch(err){
      console.alert(err);
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    try{
      deleteUser(formData)
    }catch(err){
      console.alert(err);
    }
  }

  return (
    <div>
      <div>

        <h1>Edit {username}'s Profile</h1>
        <UserForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>

      </div>

      <Button onClick={handleClick}>Delete</Button>

      <div>

        <h1>{username} decks</h1>
        <UserDecks username={username} id={id}/>

      </div>
    </div>
  );
}

export default Profile;