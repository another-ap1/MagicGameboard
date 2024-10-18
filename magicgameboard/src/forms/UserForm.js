import React,{useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

const UserForm = ({handleSubmit, formData, setFormData}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    };

    return(
        <Form onSubmit={handleSubmit}>
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
    )
}

export default UserForm;