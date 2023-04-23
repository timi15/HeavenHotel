import axios from 'axios';
import React, { useState } from 'react';
import { createContext } from "react";

export const BookingContext = createContext();

export const Bookings = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    const handleSet = (bookings) => {
        setBookings(bookings);
    }

    const handleRemove = async (booking_id) => {
        setBookings(bookings.filter((value) => value.booking_id !== booking_id));
        try {
            const res = await axios.delete(`http://localhost:8080/reservation/reservations/${booking_id}`);
            return true;
        } catch (err) {
            return false;
        }
    };
    return (
        <BookingContext.Provider value={{ bookings, handleSet, handleRemove }}>
            {children}
        </BookingContext.Provider>
    )
}
