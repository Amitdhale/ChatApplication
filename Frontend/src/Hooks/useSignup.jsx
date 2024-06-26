import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import { UseuserContext } from "../context/UserContext";

const useSignup = ()=>{
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState("");
    const {setuser,settoken} = UseuserContext();
    const navigate = useNavigate();

    const Signup = async (user)=>{
        try{
            if(!user.username || !user.email || !user.password || !user.confirmpassword || !user.gender){
                seterror("Incomplete data please fill all the field to proceed !");
                setTimeout(()=>{
                    seterror("");
                },5000)
                return;
            }
            if(user.password !== user.confirmpassword){
                seterror("Password does not matches the confirmation");
                setTimeout(()=>{
                    seterror("");
                },5000)
                return;
            }
            setloading(true);
            const response = await fetch("http://localhost:3000/auth/signup",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(user),
            });
            const data = await response.json();
            
            setloading(false);
            if(data.success){
                setuser(data.user);
                settoken(data.jwtToken);
                localStorage.setItem('jwtToken',data.jwtToken);
                console.log("could not navigate");
                navigate("/");
            }else{
                seterror(data.message);
                setTimeout(()=>{
                    seterror("");
                },3000)
            }
        }catch(err){
            seterror("Some error occured! try again later");
            setTimeout(()=>{
            
                seterror("");
            },5000)
            setloading(false);
        }
    }

    return {loading,error,Signup}
}

export default useSignup;