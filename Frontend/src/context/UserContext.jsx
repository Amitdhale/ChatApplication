import { createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext();

export const UseuserContext = ()=>{
    return useContext(userContext);
}

export const UserContextProvider = ({children})=>{
    const [user,setuser] = useState(null);
    const [token,settoken] = useState(null);
    const [users,setusers] = useState([]);
    const [error,seterror] = useState("");
    const [showmessage,setshowmessage] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('jwtToken'))
            settoken(localStorage.getItem('jwtToken'));
    },[])

    return <userContext.Provider value={{user,setuser,token,settoken,users,setusers,error,seterror,showmessage,setshowmessage}}>
        {children}
    </userContext.Provider>
}