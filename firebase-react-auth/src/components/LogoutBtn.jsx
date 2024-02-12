import React from 'react'
import { auth } from '../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'

const LogoutBtn = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Logout</h1>
                </div>
            </div>
        </div>
  )
}

export default LogoutBtn