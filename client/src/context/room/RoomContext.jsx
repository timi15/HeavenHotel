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
            const res = await axios.put(`http://localhost:8080/room/rooms/${id}`, room, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    };

    return (

        <RoomContext.Provider value={{rooms, handleSet, handleChange}}>
            {children}
        </RoomContext.Provider>
    
  )
}
