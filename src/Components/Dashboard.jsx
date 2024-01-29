import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  
  const navigate= useNavigate()
  const user= window.localStorage.getItem('user')
  const userDetails= JSON.parse(user)
  console.log(userDetails)
  const handleLogout= () => {
    window.localStorage.clear()
    navigate('/login')
  }
  return (
    <div>
      <h1>Dashboard</h1>
        <b>
          welcome {userDetails.Name}
        </b> 
        <br />
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard