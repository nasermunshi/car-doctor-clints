import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../fairbase/fairbase.config"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user, setuser] = useState(null);
const [loading, setloading] = useState(true);

const createUser = (email, password)=>{
  setloading(true);                  
   return createUserWithEmailAndPassword(auth, email, password);                 
}

const singIn = (email, password)=>{
  setloading(true);
  return signInWithEmailAndPassword(auth, email, password);

}

useEffect( ()=>{
 const UnSubscribe = onAuthStateChanged(auth, currentUser=>{
    setuser(currentUser);
    console.log('current user', currentUser);  
    setloading(false);              
  }) ;
  return ()=>{
     return UnSubscribe();               
  }                 
}, [])

const authinfo = {
  user,
  loading,
  createUser,
  singIn
}

return (
 <AuthContext.Provider value={authinfo}>
   {children}                                                         
 </AuthContext.Provider>
   );
};

export default AuthProvider;