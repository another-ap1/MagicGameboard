import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap"

const NoUsernameForm = ({getCardData}) => {
    
    //setting states
    const [formData, setFormData] = useState({commander:""})

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            getCardData(formData);
        } catch(e){
            console.error("unable to collect data:", e)
        } 
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }));
    };

    return (
        <div>
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
                    <Label>Player</Label>

                </FormGroup>
                <Button type="submit">Enter The Battlefeild</Button>
            </Form>
        </div>
    )
}

export default NoUsernameForm;