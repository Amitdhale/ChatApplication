import React from 'react'
import useLogout from '../../Hooks/useLogout'

export default function Logout() {
    const {logout} = useLogout();

  return (
    <button onClick={logout} className='flex items-center gap-2  w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
 p-4 rounded-md cursor-pointer hover:bg-slate-100 transition-colors duration-300 ease-out'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>
        <span>Logout</span>

    </button>
  )
}
