import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import useLogin from '../Hooks/useLogin';
import Loader from '../components/Loader/Loader';


export default function Login() {
  const [user,setuser] = useState({});
  const {loading,error,Login} = useLogin();

  const submitlogin = (e)=>{
    e.preventDefault();
    Login(user);
  }
  return (
    <div className='min-h-screen min-w-screen relative flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>

      {error.length>0 && <div className=' text-center text-lg absolute left-0 top-0 w-full p-2 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
        <p>{error}</p>
      </div>}


      <form onSubmit={submitlogin} className='max-w-md  p-4 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
        <h1 className='text-center text-4xl font-bold m-2 mb-4'>Login</h1>

        <div className='flex rounded-lg overflow-hidden border-2 border-solid m-2 border-gray-500'>
          <span className='bg-white p-2 text-xl'><CiUser /></span>
          <input className="w-full outline-none " type='text' placeholder='Username' 
          value={user.username} 
          onChange={(e)=>{setuser({...user,username:e.target.value})}}
          />
        </div> 

        <div className='flex rounded-lg overflow-hidden border-2 border-solid m-2 border-gray-500'>
          <span className='bg-white p-2 text-xl'><IoKeyOutline /></span>
          <input className="w-full outline-none " type='password' placeholder='Password' value={user.password} onChange={(e)=>{setuser({...user,password:e.target.value})}}/>
        </div> 

        <p className='text-md mt-2 text-center'>Already Have an Account ? <Link to={"/signup"} className='text-blue-800 underline underline-offset-2'>SignUp</Link></p>
        <button type='submit' className='p-2 w-full bg-blue-800 mt-2 text-white font-semibold' disabled={loading}> {loading ? <Loader/> : <span>Login</span>}</button>
      </form>
    </div>
  )
}
