import { useState } from "react";
import { UseuserContext } from "../context/UserContext";

const useGetPeople = ()=>{
    const [loading,setloading] = useState(false);
    const {token,setusers,seterror} = UseuserContext();


    const getPeople = async ()=>{
        try{
            setloading(true);
            const response = await fetch("http://localhost:3000/auth/people",{
                method:'GET',
                headers:{
                'Content-Type': 'application/json',
                'jwtToken': token,
                }
            });
            const data = await response.json();
            if(data.success){
                setusers(data.data);
            }else{
                seterror(data.message);
                setTimeout(()=>{
                seterror("");
                },5000)
            }
            setloading(false);
        }catch(err){
            seterror("Some error occured! try again later");
            setTimeout(()=>{
                seterror("");
            },5000)
            setloading(false);
        }
    }
    return {loading,getPeople};

}
export default useGetPeople;