import { useState } from "react";
import usersApi from "./axios";

export const useUsers = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    
    try {
      
      const response = await usersApi.get('/posts');
      console.log(response);
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }

  }

  return { 
    users,
    getUsers
  }
}
