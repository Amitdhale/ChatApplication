import React from 'react'
import { UsemessageContext } from '../../context/MessageContext'
import { UsesocketContext } from '../../context/SocketContext';
import { UseuserContext } from '../../context/UserContext';

export default function PeopleCard({user}) {
  const {setselecteduser,selecteduser} = UsemessageContext();
  const {onlineuser} = UsesocketContext();
  const {setshowmessage} = UseuserContext();

  const containerClasses = (user?._id === selecteduser?._id ? 'bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 ': ' ')  + 'flex items-center gap-4 border-b-2 first:border-t-2 p-2 cursor-pointer  transition-colors ease-in duration-500 rounded mb-2 hover:bg-gray-200  hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-80  border-gray-100'

  return (
    <div onClick={()=>{setshowmessage(true);setselecteduser(user)}}
    className={containerClasses}>
        <div className='relative'>
            <img className='w-[50px] rounded-full' src={user.profilepic}/>
            {onlineuser.includes(user._id) && <div className='absolute top-0 right-0 h-[15px] w-[15px] rounded-full bg-green-400'></div>}
        </div>
        <h3 className='text-lg font-bold'>{user.username}</h3>
    </div>
  )
}
