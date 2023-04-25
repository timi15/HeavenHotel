import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (formData) => {
        const res = await axios.post("http://localhost:8080/auth/login", formData, { withCredentials: true });
        setCurrentUser(res.data);
    }

    const logout = async () => {
        const res = await axios.get("http://localhost:8080/auth/logout", {
            withCredentials: true
        })
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}