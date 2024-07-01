import { createContext } from "react";
import {run} from "../config/CHAT-AI"

export const Context = createContext(); 

const contextProvider = (props) => {



    const onSent = async (prompt) =>{
        await run(prompt)
    }

    onSent("what is react js")

    const contextValue = {

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default contextProvider