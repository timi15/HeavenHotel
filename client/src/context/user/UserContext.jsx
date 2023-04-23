import axios from 'axios';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const Users = ({ children }) => {

    const [users, setUsers] = useState([]);

    const handleSet = (users) => {
        setUsers(users);
    }

    const handleChange = async (user_id, user) => {
        setUsers(users.map((value) => value.user_id !== user.user_id ? value : user));
        try {
            const res = await axios.put(`http://localhost:8080/user/users/${user_id}`, user, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    };

    const handleRemove = async (user_id) => {
        setUsers(users.filter((value) => value.user_id !== user_id));
        try {
            const res = await axios.delete(`http://localhost:8080/user/users/${user_id}`);            
            return true;

        } catch (err) {
            return false;
        }
    };

    return (
        <UserContext.Provider value={{ users, handleSet, handleChange, handleRemove }}>
            {children}
        </UserContext.Provider>
    )
}
