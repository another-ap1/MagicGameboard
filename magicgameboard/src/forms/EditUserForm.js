import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {Form, FormGroup, Label, Input, Button, Card} from "reactstrap";

//API for getting user and deck information
import UserApi from "../Api";

const EditUserForm = ({username, firstname, id}) => {

    //use navigate for redirecting after editing or delting a user
    const navigate = useNavigate();

    //setting states
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    };

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

    return(
        
        <Form onSubmit={handleSubmit}>
            <h1 className="title">{username}'s Profile</h1>

            <FormGroup>

                <Label>Username</Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    required/>

                <Label>Name</Label>
                <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required/>

            </FormGroup>
            <Button type="submit">Submit</Button>
            <Button onClick={handleClick}>Delete</Button>
      </Form>

    )
}

export default EditUserForm;