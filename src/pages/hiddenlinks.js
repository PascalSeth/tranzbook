import React from 'react'
import { useSelector } from 'react-redux'
import { selectisLoggedIn } from '../redux/features/authSlice'

export default function ShowOnLogin({children}) {
    const isLoggedin=useSelector(selectisLoggedIn)
  if (isLoggedin){
    return children
  }
return null
}

export  function ShowOnLogOut({children}) {
    const isLoggedin=useSelector(selectisLoggedIn)
  if (!isLoggedin){
    return children
  }
return null
}