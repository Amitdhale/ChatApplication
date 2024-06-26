import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import useSignup from '../Hooks/useSignup';
import Loader from '../components/Loader/Loader';


export default function Signup() {
  const [user,setuser] = useState({});

  const {error,loading,Signup} = useSignup();

  const submitform = (e)=>{
    e.preventDefault();
    Signup(user);
  }

  return (
    <div className='min-h-screen min-w-screen  relative flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      
      {error.length>0 && <div className=' text-center text-lg absolute left-0 top-0 w-full p-2 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
        <p>{error}</p>
      </div>}

      <form onSubmit={submitform}
      className='max-w-md  p-4 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
        <h1 className='text-center text-4xl font-bold m-2 mb-4'>Sign up</h1>

        <div className='flex rounded-lg overflow-hidden border-2 border-solid m-2 border-gray-500'>
          <span className='bg-white p-2 text-xl'><CiUser /></span>
          <input className="w-full outline-none " type='text' placeholder='Username' value={user.username} onChange={(e)=>{setuser({...user,username:e.target.value})}}/>
        </div>        

        <div className='flex rounded-lg overflow-hidden border-2 border-solid m-2 border-gray-500'>
          <span className='bg-white p-2 text-xl'><MdOutlineMail /></span>
          <input className="w-full outline-none " type='email' placeholder='Email' value={user.email} onChange={(e)=>{setuser({...user,email:e.target.value})}}/>
        </div> 

        <div className='flex rounded-lg overflow-hidden border-2 border-solid m-2 border-gray-500'>
          <span className='bg-white p-2 text-xl'><IoKeyOutline /></span>
          <input className="w-full outline-none " type='password' placeholder='Password' value={user.password} onChange={(e)=>{setuser({...user,password:e.target.value})}}/>
        </div> 

        <div className='flex rounded-lg overflow-hidden border-2 border-solid m-2 border-gray-500'>
          <span className='bg-white p-2 text-xl'><IoKeyOutline /></span>
          <input className="w-full outline-none " type='password' placeholder='Confirm Password' value={user.confirmpassword} onChange={(e)=>{setuser({...user,confirmpassword:e.target.value})}} />
        </div> 

        <label className='m-2'>
          Gender :
          {/* <br/> */}
          <label className='m-2'>
            <input type='radio' className='mr-2 cursor-pointer' name='gender' value={"male"} onChange={()=>{setuser({...user,gender:"male"})}} checked={user.gender==="male"}/>
            <span className='mr-2'>Male</span>
          </label>
          <label>
            <input type='radio'  className='mr-2  cursor-pointer' name='gender' value={"female"} onChange={()=>{setuser({...user,gender:"female"})}} checked={user.gender==="female"}/>
            <span>Female</span>
          </label>
        </label>
        
        <p className='text-md mt-2 text-center'>Don't Have an Account ? <Link to={"/login"} className='text-blue-800 underline underline-offset-2'>Login</Link></p>
        <button type='submit' className='p-2 w-full bg-blue-800 mt-2 text-white font-semibold' disabled={loading}>{loading ? <Loader/> : <span>Sign up</span>}</button>
      </form>
    </div>
  )
}
