import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoader(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const info = {
        user,
        loader,
        setUser,
        setLoader
    }
    return (
        <div>
            <AuthContext value={info}>
                {children}
            </AuthContext>

        </div>
    );
};

export default AuthProvider;