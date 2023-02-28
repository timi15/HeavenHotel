import React, { createContext, useState } from 'react'
import axios from 'axios';

export const RoomContext = createContext();

export const Room = ({ children }) => {
    const [rooms, setRooms] = useState([]);

    const handleSet=(rooms)=>{
        setRooms(rooms);
    };

    const handleChange = async (id, room) => {
        setRooms(rooms.map((value) => value.id !== room.id ? value : room));
        try {
            const res = await axios.put(`http://localhost:8080/rooms/${id}`, room, {
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
        setRooms(rooms.filter((value) => value.id !== id));
        try {
            const res = await axios.delete(`http://localhost:8080/rooms/${id}`);
            return true;
        } catch (err) {
            return false;
        }
    };

    return (

        <RoomContext.Provider value={{rooms, handleSet, handleChange, handleDelete}}>
            {children}
        </RoomContext.Provider>
    
  )
}
