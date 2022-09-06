import React, {useState, createContext } from 'react';
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContextExample = () => {
    const [username, setUsername] = useState("")

    return (
        <AppContext.Provider value={{username, setUsername}}>
            <div>
                <Login />
            </div>
            <div>
                <User />
            </div>
        </AppContext.Provider>
    );
};

export default UseContextExample;
