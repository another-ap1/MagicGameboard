import React,{useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

import UserApi from "../Api"

const UserForm = ({id}) => {

    const [formData,setFormData] = useState({commander:"",colors:"",users_id:id})

    const addDeck = async (data) => {
        const res = await UserApi.addDeck(data);
    }

    const handleSubmit = (e) => {
        try{
            addDeck(formData)
        }catch(err){
            console.alert(err)
        }
    }

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

              <Label>Commander</Label>
              <Input
                  type="text"
                  name="commander"
                  id="commander"
                  value={formData.commander}
                  onChange={handleChange}
                  required/>

              <Label>Colors</Label>
              <Input
                  type=""
                  name="colors"
                  id="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  required/>

          </FormGroup>
          <Button type="submit">Submit</Button>
      </Form>
    )
}

export default UserForm;