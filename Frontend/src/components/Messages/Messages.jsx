import React from 'react'
import StartConverstation from './StartConverstation'
import { UsemessageContext } from '../../context/MessageContext'
import SelectedUser from './SelectedUser';
import Conversation from './Conversation';
import MessageInput from './MessageInput';
import { UseuserContext } from '../../context/UserContext';

export default function Messages() {
  const {selecteduser} = UsemessageContext();
  const {showmessage} = UseuserContext();
  const stylecomponent = showmessage ? 'w-full p-4 flex flex-col flex-auto md:min-w-[350px]' : 'w-full p-4 hidden md:flex flex-col flex-auto md:min-w-[350px]';
  if(!selecteduser){
    return (
      <div className={stylecomponent}>
        <StartConverstation/>
      </div>
    )
  }

  

  return (
    <div className={stylecomponent}>
      <SelectedUser/>
      <Conversation/>
      <MessageInput/>
    </div>
  )
  }
  
  // {!selecteduser && }