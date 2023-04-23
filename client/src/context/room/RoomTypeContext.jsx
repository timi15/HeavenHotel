import axios from 'axios';
import React, { createContext, useState } from 'react'

export const RoomTypeContext = createContext();

export const RoomType = ({ children }) => {
    const [roomTypes, setRoomTypes] = useState([]);

    const handleSet = (roomTypes) => {
        setRoomTypes(roomTypes);
    };


    const handleChange = async (id, roomType) => {
        setRoomTypes(roomTypes.map((value) => value.id !== roomType.id ? value : roomType));
        try {
            const res = await axios.put(`http://localhost:8080/room/roomtypes/${id}`, roomType, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    return (
        <RoomTypeContext.Provider value={{ roomTypes, handleSet, handleChange }}>
            {children}
        </RoomTypeContext.Provider>
    )
}
