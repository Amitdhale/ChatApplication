import React from 'react'
import UserProfile from './UserProfile'
import PeopleCard from './PeopleCard'
import { UseuserContext } from '../../context/UserContext'
import { UsesocketContext } from '../../context/SocketContext';

export default function SideBarPeople() {
  const {users} = UseuserContext();

  return (
    <div className=' h-full w-full my-6 overflow-scroll scrollbar-none'>
      {
        users.map(user=>{
          return <PeopleCard user={user} key={user._id}/>
        })
      }
      
      
    </div>
  )
}
