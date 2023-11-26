"use client"
import { useState, createContext } from "react";
export const AuthenticantedUserContext = createContext({
    authenticatedUser: null,
    handleAuthenticatedUser: (user:any) => {},
    });


export const AuthenticatedUserProvider = ({ children }:{children:React.ReactNode}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const handleAuthenticatedUser = (user:any) => {
        setAuthenticatedUser(user);
    };
    return (
        <AuthenticantedUserContext.Provider value={{ authenticatedUser, handleAuthenticatedUser }}>
            {children}
        </AuthenticantedUserContext.Provider>
    );
};