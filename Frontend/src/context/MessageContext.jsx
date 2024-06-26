import { createContext, useContext, useEffect, useState } from 'react'

const messageContext = createContext();

export const UsemessageContext = ()=>{
    return useContext(messageContext);
}

export const MessageContextProvider = ({children})=>{
    const [selecteduser,setselecteduser] = useState(null);
    const [converstation,setconverstation] = useState([]);
    

    return <messageContext.Provider value={{selecteduser,setselecteduser,converstation,setconverstation}}>
        {children}
    </messageContext.Provider>
}