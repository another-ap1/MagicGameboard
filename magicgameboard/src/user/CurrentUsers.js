import React,{useState, useEffect} from "react";
import UserApi from "../Api"
import {Button} from "reactstrap"
import {Link} from "react-router-dom"

const CurrentUsers = ()=>{

  const [users, setUsers] = useState();

  useEffect(()=>{
    const getCurrentUsers = async () => {
      const res = await UserApi.getAll();
      setUsers(res.data);
    }
    getCurrentUsers();
  },[]);
  
  if(!users) return <div>Loading...</div>

  return (
      <div>
          <ul>
              {users.map(u => (
                  <li key={crypto.randomUUID()}>
                    Username: {u.username} Name: {u.firstname} 
                    <Button><Link to={'/user/' + u.username + "/" + u.firstname + "/" + u.id}>edit</Link></Button>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default CurrentUsers;