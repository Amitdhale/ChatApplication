import React from 'react'
import UserProfile from './UserProfile'
import SideBarPeople from './SideBarPeople'
import Logout from './Logout'
import { UseuserContext } from '../../context/UserContext'

export default function Sidebar() {
  const {showmessage} = UseuserContext();
  const stylecomponent = showmessage ? 'md:min-w-[350px] flex-1 border-r-2 border-white p-4 hidden md:flex flex-col' : 'md:min-w-[350px] flex-1 border-r-2 border-white p-4 flex flex-col';
  return (
    <section className={stylecomponent}>
        <UserProfile/>
        <SideBarPeople/>
        <Logout/>
    </section>
  )
}
