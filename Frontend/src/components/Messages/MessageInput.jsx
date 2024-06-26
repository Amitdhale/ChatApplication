import React, { useState } from 'react'
import useSendMessage from '../../Hooks/useSendMessage';

export default function MessageInput() {
  const {loading,sendMessage} = useSendMessage();
  const [text,settext] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    sendMessage(text,settext);
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center gap-2 border-t-2 border-white pt-2'>
            <input type='text' className='p-2 text-lg rounded-xl w-full placeholder:text-white border-2 border-white bg-transparent outline-none text-white' 
            value={text} onChange={(e)=>{settext(e.target.value)}}
            placeholder='Message'/>
            <button className='bg-white p-2 rounded' disabled={loading}>
            {loading ? <div>...</div>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>}

            </button>
        </form>
    </div>
  )
}
