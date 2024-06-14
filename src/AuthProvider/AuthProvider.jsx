import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        return signOut(auth)
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('OMG tmi to genius', currentUser);
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        userRegister,
        userLogin,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node,
}