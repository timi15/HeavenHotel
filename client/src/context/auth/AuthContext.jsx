import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const Auth = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
       JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (formData) => {
        const res = await axios.post("http://localhost:8080/login", formData, {withCredentials: true}); 
        setCurrentUser(res.data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ön sikeresen bejelentkezett fiókjába!',
            showConfirmButton: false,
            timer: 2500
          })
    
    }

    const logout = async () => {
        const res = await axios.get("http://localhost:8080/logout")
        setCurrentUser(null);
        window.location.href="/bejelentkezes";
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}