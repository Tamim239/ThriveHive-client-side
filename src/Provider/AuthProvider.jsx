
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"

import PropTypes from 'prop-types';
import { auth } from "../Firebase/firebase.confiq";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



const createUser =(email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const updateUser = (name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo })

}


const loginUser = (email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}
const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}
const googleLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
}
const githubLogin = () =>{
    setLoading(true)
   return signInWithPopup(auth, githubProvider)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser)
    })
return ()=>{
    unsubscribe()
}

}, [])




 const authInfo = {
   user,
   createUser,
  loginUser,
  googleLogin,
  githubLogin,
  loading,
  logOut,
  updateUser,
  setUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes ={
    children: PropTypes.node
}