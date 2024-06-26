import { useState } from  "react";
import { UseuserContext } from "../context/UserContext";
import { UsemessageContext } from "../context/MessageContext";

const useSendMessage = ()=>{
    const [loading,setLoading] = useState(false);
    const {token,seterror} = UseuserContext();
    const {selecteduser,setconverstation,converstation} = UsemessageContext();
    
    const sendMessage = async (text,settext)=>{
        try{
            setLoading(true);
            const response = await fetch('http://localhost:3000/messages/message',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'jwtToken': token,
                },
                body:JSON.stringify({
                    reciverId : selecteduser?._id,
                    message : text,
                })
    
            });
            const data = await response.json();
            setLoading(false);
            if(data.success){
                setconverstation([...converstation,data.newmessage]);
                settext("");
            }else{
                seterror(data.message);
                setTimeout(()=>{
                    seterror("");
                },3000)
                setLoading(false)
            }

        }
        catch(err){
            seterror("Some error occured! try again later");
            setTimeout(()=>{
            
                seterror("");
            },5000)
        }
    }

    return {loading,sendMessage};
}

export default useSendMessage;