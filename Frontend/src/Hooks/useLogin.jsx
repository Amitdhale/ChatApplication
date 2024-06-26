import { useState } from "react";
import { UseuserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [loading,setloading] = useState(false);
  const [error,seterror] = useState("");
  const {setuser,settoken} = UseuserContext();
  const navigate = useNavigate();

  const Login = async (user)=>{
    if(!user.username || !user.password){
        seterror("Incomplete data please fill all the field to proceed !");
        setTimeout(()=>{
            seterror("");
        },5000)
        return;
    }

    setloading(true);
    const response = await fetch("http://localhost:3000/auth/login",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(user)
    })

    const data = await response.json();        
    setloading(false);
    if(data.success){
        setuser(data.user);
        settoken(data.jwtToken);
        localStorage.setItem('jwtToken',data.jwtToken);
        navigate("/");
    }else{
        seterror(data.message);
        setTimeout(()=>{
            seterror("");
        },3000)
        setloading(false)
    }
  }

  return {error,Login,loading};

}
