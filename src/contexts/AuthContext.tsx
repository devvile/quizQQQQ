import React from "react";
import { createContext,useContext, useState, useEffect} from "react";
//import { User } from "../types";
import { auth } from '../firebase/config';

import { User, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
  } from 'firebase/auth';

interface AuthContextProps {
    currentUser: User | null;
    loading: boolean;
    signUp: (email: string, password: string) => Promise<void>;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
    googleSignIn: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

interface AuthProviderProps {
    children: ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    // Sign up with email & password
    async function signUp(email: string, password: string) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User signed up successfully
          console.log('User signed up:', userCredential.user);
        })
        .catch((error) => {
          console.error('Error signing up:', error.message);
          throw error;
        });
    }
  
    // Login with email & password
    async function logIn(email: string, password: string) {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User logged in successfully
          console.log('User logged in:', userCredential.user);
        })
        .catch((error) => {
          console.error('Error logging in:', error.message);
          throw error;
        });
    }
  
    // Logout
    async function logOut() {
      return signOut(auth)
        .then(() => {
          console.log('User logged out');
        })
        .catch((error) => {
          console.error('Error logging out:', error.message);
          throw error;
        });
    }
  
    async function googleSignIn() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
          .then((result) => {
            console.log('Google sign in successful:', result.user);
          })
          .catch((error) => {
            console.error('Error with Google sign in:', error.message);
            throw error;
          });
      }
    
      // Reset Password
      async function resetPassword(email: string) {
        return sendPasswordResetEmail(auth, email)
          .then(() => {
            console.log('Password reset email sent');
          })
          .catch((error) => {
            console.error('Error sending password reset:', error.message);
            throw error;
          });
      }
    
      useEffect(() => {
        // Monitor auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
    
        // Cleanup subscription
        return unsubscribe;
      }, []);
    
      const value = {
        currentUser,
        loading,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        resetPassword
      };
    
      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      );
    }