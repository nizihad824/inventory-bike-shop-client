import React, { createContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userSignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const authInfo = {
        currentUser,
        userCreate,
        userSignIn,
        userSignInWithGoogle,
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
