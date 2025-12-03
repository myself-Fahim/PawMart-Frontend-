import React, { useContext } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { Link, Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    
    const {user,loader} = useContext(AuthContext)

    if(loader)
       return <Loader></Loader>

    if(user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>



};

export default PrivateRoutes;