import React,{useState,createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
const [isLoggedIn,setLoggedIn] = useState(false);

const updateLoginStatus = (status) => {
    setLoggedIn(status);
}

return(
    <AuthContext.Provider value={{isLoggedIn,updateLoginStatus}}>
      {children}
    </AuthContext.Provider>
)

}