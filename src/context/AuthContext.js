import React,{useState,createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
  const [currentUser, setCurrentUser] = useState({
    user: null,
    isLoggedIn: false,
  });

  const updateCurrentUser = (data) => {
    setCurrentUser({
      user: data?.user,
      isLoggedIn: data?.isLoggedIn,
    });
  };

return(
    <AuthContext.Provider value={{currentUser,updateCurrentUser}}>
      {children}
    </AuthContext.Provider>
)

}