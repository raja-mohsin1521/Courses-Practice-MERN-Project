import {  createContext, useContext } from "react";


export const AuthContext=createContext();
const storeToken =(token)=>{
return localStorage.setItem('Token',token)
}

export const AuthProvider=({children})=>{
    return <AuthContext.Provider value={storeToken}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext)
}