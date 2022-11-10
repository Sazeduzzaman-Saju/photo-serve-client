import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLoginProvider = (provider) => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }
    const gitLoginProvider = (provider) => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    // Create User 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Sing In user 
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // singOut 
    const singOut = () => {
        return signOut(auth);
    }
    // updateUser
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])


    const authDetails = {
        user,
        loading,
        createUser,
        singInUser,
        singOut,
        updateUser,
        googleLoginProvider,
        gitLoginProvider,
    }

    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;