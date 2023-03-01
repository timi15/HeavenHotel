import axios from 'axios';
import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const Users = ({children}) => {

  const [users, setUsers] = useState([]);

  const handleSet=(users)=>{
      setUsers(users);
  }

  const handleChange = async (id, user) => {
    setUsers(users.map((value) => value.id !== user.id ? value : user));
    try {
        const res = await axios.put(`http://localhost:8080/users/${id}`, user, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return true;
    } catch (err) {
        return false;
    }
};

const handleDelete = async (id) => {
    setUsers(users.filter((value) => value.id !== id));
    try {
        const res = await axios.delete(`http://localhost:8080/users/${id}`);
        return true;
    } catch (err) {
        return false;
    }
};

  return (
    <UserContext.Provider value={{users, handleSet, handleChange, handleDelete}}>
      {children}
    </UserContext.Provider>
  )
}
