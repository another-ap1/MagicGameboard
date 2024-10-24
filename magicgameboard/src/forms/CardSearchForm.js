import React,{useState} from "react";
import {Form, Input, Button} from "reactstrap"

const CardSearchForm = ({findCards}) => {

    const [formData, setFormData] = useState({cardSearch:""});

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
          findCards(formData);
          setFormData({cardSearch:""})
        }catch(e){
          return <div>Sorry, unable to find please refine your search</div>
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
        <div>
            <h1>Card Search</h1>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    name="cardSearch"
                    id="cardSearch"
                    valeue={formData.cardSearch}
                    onChange={handleChange}/>
                <Button type="submit">Search</Button>
            </Form>
        </div>
    )
}

export default CardSearchForm;