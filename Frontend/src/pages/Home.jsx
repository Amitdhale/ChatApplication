import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Messages from '../components/Messages/Messages'
import { UseuserContext } from '../context/UserContext';
import useGetuser from '../Hooks/useGetuser';
import useGetPeople from '../Hooks/useGetPeople';
import {Navigate} from 'react-router-dom';
import HomeLodingpage from '../components/Loader/HomeLodingpage';

export default function Home() {
  const {loading,getuser} = useGetuser();
  const {token,error} = UseuserContext();
  const {getPeople} = useGetPeople();

  useEffect(()=>{
    if(token){
      getuser();
      getPeople();
    }
  },[token]);

  if(!localStorage.getItem('jwtToken')){
    return <Navigate to={"/login"}/>
  }

  if(loading) return (
    <HomeLodingpage/>
  )

  return (
    <div className='min-h-screen min-w-screen relative flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-4'> 
        {(error.length>0 ) && <div className=' text-center text-lg absolute left-0 top-0 w-full p-2 z-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
          <p>{error}</p>
        </div>}
      <div className='flex w-[1000px] h-[90vh] min-w-[500px] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
          <Sidebar/>
          <Messages/>
      </div>
    </div>
  )
}
