import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token")
    const currentuser = useSelector((state) => state.userReducer.currentuser)
    if (!token && currentuser.role === "admin") {
        return <Navigate to="/signIn" />
    } else { 
        return children
    }
}

export default PrivateRoute