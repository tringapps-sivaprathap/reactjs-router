import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    const signin = (theUser) => {
        setUser(theUser);
    };

    const logout = () => {
        setUser(null);
    };

    let value = {user, signin, logout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};