import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../../../context/Store'
import { axiosConfig } from '../../general/axiosConfig'
import HomeScreen from '../../screens/HomeScreen'

const AppRouter = () => {
    const {state:{userData},dispatch}=useContext(Context)
    console.log(userData);
    useEffect(()=>{
        axiosConfig.get('minimal/',{
            headers: {
                Authorization: `Bearer ${userData.access}`,
            },
        }).then(function(res){
            dispatch({
                type:"UPDATE_USER_DATA",
                payload:{
                    name:res.data.data.name
                }
            })
        })
    },[])
  return (
    <Routes>
        <Route path="/" element={<HomeScreen/>}/>
    </Routes>
  )
}

export default AppRouter