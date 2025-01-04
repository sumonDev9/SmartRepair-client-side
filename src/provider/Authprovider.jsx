import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/Firebase_init";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user registation
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

       // updateprofile
       const UserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

       // login
       const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

     // logout
     const userLogout = () => {
        setLoading(true)
        return signOut(auth);
    }

      // google provider
      const logInbyGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser);
             // jwt
             if(currentUser?.email){
                const user = {email: currentUser.email};

                axios.post('https://smart-repair-server-side.vercel.app/jwt', user, {withCredentials: true})
                .then(res =>{ 
                    console.log('login token',res.data)
                    setLoading(false);
                })
             }

             else {
                axios.post('https://smart-repair-server-side.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false);
                })
             }
             
         })
         return () => {
             unsubscribe();
         }
     }, [])

    const AuthInfo = {
        user,
        setUser,
        createUser,
        UserProfile,
        userLogout,
        userLogin,
        logInbyGoogle,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;