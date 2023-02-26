import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../screens/Login'
import Register from '../../screens/Register'

const AuthRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
  )
}

export default AuthRouter