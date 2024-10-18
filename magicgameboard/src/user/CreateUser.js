//Form for creating and adding a new user to the database

import React, {useState} from "react";
import UserApi from "../Api"

import UserForm from "../forms/UserForm";
import CurrentUsers from "./CurrentUsers";

const CreateUser = () => {
  const INITIAL_VALUES = {
    username:"",
    firstname:""
  } 
  
  const [formData, setFormData] = useState(INITIAL_VALUES)

  const addUser= async (data) => {
    const newUser = await UserApi.signup(data);
    setFormData(INITIAL_VALUES);
  }

  const handleSubmit = (e) => {
    try{
      addUser(formData)
    }catch(e){
      console.error("unable to add user:", e)
    }
  }

  return (
    <div>
      <h1>Create a Account</h1>
  
      <UserForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      
      <div>
        <h3>Current Users</h3>
        <CurrentUsers />
      </div>
    </div>
  );
}

export default CreateUser;