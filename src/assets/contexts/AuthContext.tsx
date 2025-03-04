import React from "react";
import { createContext,useContext, useReducer} from "react";
import { User } from "../../types";

interface AuthContextType {
    isAuthenticated:boolean;
    user:User | null;
    login: (user:User) => void;
    logout: ()=>void;
}

interface AuthState{
    isAuthenticated: boolean;
    user: User | null;
}

type AuthAction = 
  | { type: 'LOGIN', payload: User }
  | { type: 'LOGOUT' };

 const initialState: AuthState = {
    isAuthenticated: false,
    user: null
  };

function authReducer(state:AuthState, action: AuthAction):AuthState{
    switch (action.type){
        case 'LOGIN':
            return {
                isAuthenticated:true,
                user: action.payload
            }
        case "LOGOUT":{
            return{
                isAuthenticated:false,
                user:null
            }
        }
    }
    return state
}

const authContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider=({children}:{children:React.ReactNode})=>{
    const [state,dispatch] = useReducer(authReducer,initialState);

    const login =(user:User)=>{
        dispatch({type:"LOGIN", payload:user})
    }

    const logout =()=>{
        dispatch({type:"LOGOUT"})
    }

    const value={
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        login,
        logout
    }

    return (
        <authContext.Provider value={value}>
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