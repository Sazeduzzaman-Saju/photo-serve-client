import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Create User 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const AuthDetails = {
        user,
        loading,
        createUser,
    }
    return (
        <AuthContext.Provider value={AuthDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;