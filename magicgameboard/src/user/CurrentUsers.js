import React,{useState, useEffect} from "react";
import UserApi from "../Api"
import {Link} from "react-router-dom"

import "../styles/currentUser.css";
import { Card, CardTitle, CardBody } from "reactstrap";

const CurrentUsers = ()=>{

  //setting state for the all current user
  const [users, setUsers] = useState();

  //getting all the current users from the database
  useEffect(()=>{
    const getCurrentUsers = async () => {
      const res = await UserApi.getAll();
      setUsers(res.data);
    }
    getCurrentUsers();
  },[]);
  
  //if we are still loading the data then render this
  if(!users) return <div>Loading...</div>

  //when data has come back from the database it will render this.
  return (
      <Card className="currentUser">
          <CardTitle><h2 className="title">Current Wizards</h2></CardTitle>
          <CardBody>
          <ul>
              {users.map(u => (
                  <li key={crypto.randomUUID()}>
                    <Link to={'/user/' + u.username + "/" + u.firstname + "/" + u.id} className="user"><b>Username-</b> {u.username} | <b>Magician-</b> {u.firstname}</Link>
                  </li>
              ))}
          </ul>
          </CardBody>
      </Card>
  )
}

export default CurrentUsers;