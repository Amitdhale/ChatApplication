import React from 'react'
import { UsemessageContext } from '../../context/MessageContext'
import { UseuserContext } from '../../context/UserContext';

export default function SelectedUser() {
    const {selecteduser,setselecteduser} = UsemessageContext();
    const {setshowmessage} = UseuserContext();

    return (
        <div className='flex border-b-2 border-white justify-between items-center'>
            <div className='flex items-center gap-4  p-4 '>
                <div>
                    <img className='w-[50px] rounded-full' src={selecteduser?.profilepic}/>
                </div>
                <h3 className='text-lg font-bold'>{selecteduser?.username}</h3>
            </div>
            <button className='flex md:hidden gap-2 text-white' onClick={()=>{setselecteduser(null);setshowmessage(false)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span>Back</span>

            </button>
    </div>
  )
}
