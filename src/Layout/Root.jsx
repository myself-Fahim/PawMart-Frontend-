import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import AuthContext from '../AuthContext/AuthContext';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';

const Root = () => {
    const {loader} = useContext(AuthContext)

    if(loader)
        return <Loader></Loader>
    return (
       
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;