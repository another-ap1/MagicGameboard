import React from "react";
import {Form, FormGroup, Label, Input, Button, Card} from "reactstrap";

import "../styles/createUser.css"

const UserForm = ({handleSubmit, formData, setFormData}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    };

    return(
        <Card className="createUser">
        
        <Form onSubmit={handleSubmit}>
        <h1 className="title">Create a Account</h1>
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
      </Form>
      </Card>
    )
}

export default UserForm;