import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState([]);

    const data = {
        login,
        setLogin,
        userData,
        setUserData
    };
    useEffect(() => {
        const storedLogin = localStorage.getItem("token");
        if (storedLogin && storedLogin === "true") {
            setLogin(true);
        }
    }, []);
    return (
        <AccountContext.Provider value={data}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccount = () => {
    return useContext(AccountContext);
};
