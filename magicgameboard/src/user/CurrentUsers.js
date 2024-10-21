import React,{useState, useEffect} from "react";
import UserApi from "../Api"
import {Link} from "react-router-dom"

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
      <div>
          <ul>
              {users.map(u => (
                  <li key={crypto.randomUUID()}>
                    <Link to={'/user/' + u.username + "/" + u.firstname + "/" + u.id}>Username: {u.username} Name: {u.firstname}</Link>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default CurrentUsers;