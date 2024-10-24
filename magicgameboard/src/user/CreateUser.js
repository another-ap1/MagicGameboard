import React, {useState} from "react";
import UserApi from "../Api"
import {CardGroup} from "reactstrap"

//components 
import UserForm from "../forms/UserForm";
import CurrentUsers from "./CurrentUsers";

import "../styles/currentUser.css"

const CreateUser = () => {
  const INITIAL_VALUES = {
    username:"",
    firstname:""
  } 
  
  //setting form data state
  const [formData, setFormData] = useState(INITIAL_VALUES)

  //function for adding a new user to the database
  const addUser= async (data) => {
    const newUser = await UserApi.signup(data);
    setFormData(INITIAL_VALUES);
  }

  //handleSubmit that is passed as a prop to the userform
  const handleSubmit = (e) => {
    try{
      addUser(formData)
    }catch(e){
      console.error("unable to add user:", e)
    }
  }

  return (
    <CardGroup>
      
      <UserForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      <CurrentUsers />
      
    </CardGroup>
  );
}

export default CreateUser;