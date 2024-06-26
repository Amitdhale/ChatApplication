import React from 'react'
import { UseuserContext } from '../../context/UserContext'

export default function UserProfile() {
  const {user} = UseuserContext();

  return (
    <div className='flex items-center gap-4 border-b-2 border-white p-4 '>
        <div>
            <img className='w-[50px] rounded-full' src={user?.profilepic}/>
        </div>
        <h3 className='text-lg font-bold'>{user?.username}</h3>
    </div>
  )
}
