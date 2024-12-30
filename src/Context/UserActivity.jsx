import { createContext, useReducer, useState } from "react";
import {serActivityReducer} from '../Reducers/UserActivityReducer'

// Define the context directly
export const userActivity = createContext({});

const UserActivity = ({ children }) => {

    const [state,setstate]=useReducer(serActivityReducer,{
        image:"",
        name:"",
        city:"",
        position:"",
    })
    /*const [image, setimage] = useState("");
    const [name, setname] = useState("");
    const [city, setCity] = useState("");
    const [position, setposition] = useState("");*/

    return (
        <userActivity.Provider
            value={{
             state,setstate
            }}
        >
            {children}
        </userActivity.Provider>
    );
};

export default UserActivity;
