import React from "react";
import { createContext, useState , useContext} from "react";

interface AuthContextType
{
    isAuthenticated:boolean;
    user:User | null;
}

interface User{
    name:string;
    ide:string;
    email:string;
}

const authContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider=({children}:{children:React.ReactNode})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user,setUser] = useState(null);

    return (
        <authContext.Provider value={{isAuthenticated, user}}>
            {children}
        </authContext.Provider>)
}



export function useAuth() {
    const context = useContext(authContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }