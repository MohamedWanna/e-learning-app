import React from 'react'
import { useSelector } from 'react-redux'

const DashboardStudent = () => {
  const currentuser = useSelector((state)=>state.userReducer.currentuser);
  return (
    <div>
      <h1>{`Welcome ${currentuser && currentuser.fullName}`}</h1>
    </div>
  )
}

export default DashboardStudent

