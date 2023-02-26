import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../../../context/Store'
import { axiosConfig } from '../../general/axiosConfig'
import Login from '../../screens/Register'
import AuthRoute from '../routes/AuthRoute'
import PrivateRoute from '../routes/PrivateRoute'
import AppRouter from './AppRouter'
import AuthRouter from './AuthRouter'

const MainRouter = () => {
    const {dispatch,state:{userData:{access}}}=useContext(Context)
    useEffect(()=>{
        let userData=localStorage.getItem('userData');
        userData = JSON.parse(userData);
        dispatch({
          type:"UPDATE_USER_DATA",
          payload: userData
        })
      },[])
    
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRoute><AuthRouter/></AuthRoute>}/>
        <Route path='/' element={<PrivateRoute><AppRouter/></PrivateRoute>}/>
    </Routes>
  )
}

export default MainRouter