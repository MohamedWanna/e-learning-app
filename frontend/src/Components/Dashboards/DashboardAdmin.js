import React from 'react'
import { useSelector } from 'react-redux'

const DashboardAdmin = () => {
    const currentuser = useSelector((state) =>state.useReducer.currentuser);
  return (
    <div>
        <h1>Welcome + {currentuser && currentuser.fullName}</h1>
    </div>
  )
}

export default DashboardAdmin