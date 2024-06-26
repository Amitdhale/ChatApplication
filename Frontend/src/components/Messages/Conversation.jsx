import React, { useEffect, useRef } from 'react'
import useGetConverstation from '../../Hooks/useGetConverstation';
import { UsemessageContext } from '../../context/MessageContext';
import { UseuserContext } from '../../context/UserContext';
import useListenMessage from '../../Hooks/useListenMessage';
import AniLoder from '../Loader/AniLoder';

const Message = ({message,usermessage})=>{
    const backgroundColor = usermessage? 'bg-blue-300':'bg-white';

    return (
    <div className={ usermessage ? 'flex justify-end m-2' : 'flex justify-start m-1'}>
        <p className={'w-fit px-2 p-1 rounded-md max-w-[75%] '+ backgroundColor}>{message}</p>
    </div>
    )
}
export default function Conversation() {
  const {loading,getConverstation} = useGetConverstation();
  const {selecteduser,converstation} = UsemessageContext();
  const chatContainerRef = useRef(null);

  useListenMessage();
  const {user} = UseuserContext();

  useEffect(()=>{
    if(selecteduser){
      getConverstation();
    }
    
  },[selecteduser]);

  useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [converstation]);

  if(loading){
    return (<div className='h-full w-full p-4 flex items-center justify-center'>
      <AniLoder/>
    </div>)
  }
  return (
    <div ref={chatContainerRef} className='h-full w-full relative p-4 overflow-scroll scrollbar-none'>
        {
          converstation.map((message)=>{
            return <Message message={message.message} usermessage={user._id === message.senderId.toString()} key={message._id}/>
          })
        }

        {
          converstation.length == 0 && <div className='flex justify-center items-center h-full'>
            <h4 className='text-xl text-gray-500'>Seems interesting start talking !!!</h4>
          </div>
        }
    </div>
  )
}
