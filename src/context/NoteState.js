import React, {createContext, useState} from "react";

export const NoteContext = createContext();

const NoteState = (props)=>{
    let user = {
        name:"Jay",
        email:"jay@gmail.com"
    }
    
    const [state, setState] = useState(user)

    const update=()=>{
        setTimeout(() => {
            setState ({
                name:"JP",
                email:"jp@gmail.com"
            })   
        }, 3000);
    }
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;