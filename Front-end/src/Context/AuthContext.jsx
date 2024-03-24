import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const useAuthcontext = () => {
    return useContext(Authcontext);
}

export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <Authcontext.Provider value={{ authUser, setAuthUser }}>
        {children}
    </Authcontext.Provider>
}