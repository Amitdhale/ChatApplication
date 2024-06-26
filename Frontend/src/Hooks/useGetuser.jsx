import { useState } from "react";
import { UseuserContext } from "../context/UserContext";

export default function useGetuser() {
  const {setuser,token,seterror} = UseuserContext();
  const [loading,setLoading] = useState(false);

  const getuser = async ()=>{
    try{
      setLoading(true);
      const response = await fetch("http://localhost:3000/auth/user",{
        method:'GET',
        headers:{
          'Content-Type': 'application/json',
          'jwtToken': token,
        }
      });
      const data = await response.json();
      if(data.success){
        setuser(data.user);
      }else{
        seterror(data.message);
        setTimeout(()=>{
        seterror("");
        },5000)
      }
      setLoading(false);

    }catch(err){
      seterror("Some error occured! try again later");
      setTimeout(()=>{
       seterror("");
      },5000)
      setLoading(false);
    }
     
  }

  return {loading,getuser};
}
