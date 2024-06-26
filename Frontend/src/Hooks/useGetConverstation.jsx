import { useState } from "react";
import { UsemessageContext } from "../context/MessageContext";
import { UseuserContext } from "../context/UserContext";

export default function useGetConverstation() {
  const [loading,setLoading] = useState(true);
  const {selecteduser,setconverstation} = UsemessageContext();
  const {token,seterror} = UseuserContext();


  const getConverstation = async ()=>{
    try{
      setLoading(true);
      const response = await fetch(`http://localhost:3000/messages/converstation/${selecteduser?._id}`,{
          method:'GET',
        headers:{
          'Content-Type': 'application/json',
          'jwtToken': token,
        }
      });

      const data = await response.json();
      if(data.success){
        setconverstation(data.data);
      }else{
        seterror(data.message);
        setTimeout(()=>{
          seterror("");
        },3000)
      }
      setLoading(false);
    }catch(err){
      seterror("Some internal error occured try later");
        setTimeout(()=>{
          seterror("");
        },3000)
        setLoading(false);
  }
  }
  
  return {loading,getConverstation};
}
