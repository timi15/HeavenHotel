import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const Auth = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
       JSON.parse(localStorage.getItem("user")) || null
    );


    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8080/login", inputs, {withCredentials: true}); 
        setCurrentUser(res.data);
    }

    const logout = async () => {
        const res = await axios.get("http://localhost:8080/logout")
        setCurrentUser(null);
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