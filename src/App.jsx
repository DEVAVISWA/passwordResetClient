import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  const padd = {
    padding: 10
  }
  return (
    <div>
      <Router>
        <div>
          <Link to={'/signup'} style={padd} >Signup</Link>
          <Link to={'/login'} style={padd} > login </Link>
        </div>
        <Routes >
          <Route path='*' element={<h1>Default</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App