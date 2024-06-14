import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

 

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => { 

    const [user, setUser] = useState([]);

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        userRegister,
        userLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;