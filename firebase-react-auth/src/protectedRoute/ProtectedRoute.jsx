import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {      // this ProtectedRoute component protect the user data present in home page after successful login
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));  // this convert the user id from stringto object

  useEffect(() => {
    if(!user){
      navigate('/');
     }
  }, [user, navigate])

  return(
    <>
       {user && children}
    </>
  )

}
  

export default ProtectedRoute