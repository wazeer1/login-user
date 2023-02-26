import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../../context/Store';
// import { Context } from '../../context/store';

const AuthRoute = ({children}) => {
    const {state:{userData:{isVerified}}} = useContext(Context);
    console.log(isVerified);
    return !isVerified ? children : <Navigate to='/' />;
};

export default AuthRoute;
