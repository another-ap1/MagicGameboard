import React, {useState} from "react";
import UserApi from "../Api"

//components 
import UserForm from "../forms/UserForm";
import CurrentUsers from "./CurrentUsers";

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