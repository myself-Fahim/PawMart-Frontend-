import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import AuthContext from '../AuthContext/AuthContext';

const MyOrder = () => {
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:4000/myorders/${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },[user.email])
   

    return (
        <div>
            <h1>My Order</h1>
        </div>
    );
};

export default MyOrder;
