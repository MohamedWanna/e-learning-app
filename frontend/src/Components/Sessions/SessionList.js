import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FooterPage from '../FooterPage'
import SessionCard from './SessionCard'

function SessionList() {
  const sessions = useSelector(state=>state.sessionReducer.sessions)
  const token = localStorage.getItem("token")
  
  return (
    <div>
      <FooterPage/>
      {token ?
        <Link to = "/AddSession">
          <button style={{margin: "5px" , padding:"5px"}}>Add Session</button>
        </Link> : null 
      }
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        {sessions.map(el=><SessionCard el={el} key={el._id} />)}
      </div>
    </div>
  )
}

export default SessionList