import { UseuserContext } from "../context/UserContext";

export default function useLogout() {
  const {setuser,settoken} = UseuserContext();
  const logout = ()=>{
    localStorage.removeItem('jwtToken');
    settoken(null);
    setuser(null);
  }
  return {logout};
}
