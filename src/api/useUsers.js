import { useState } from "react";
import usersApi from "./axios";

export const useUsers = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    
    try {
      
      const response = await usersApi.get('/posts');
      
      setUsers(response.data);

    } catch (error) {
      console.log(error);
    }

  }

  return { 
    users,
    getUsers
  }
}
