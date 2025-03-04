import Layout from './components/shared/Layout'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Categories from './pages/Categories'

import { useAuth } from './contexts/AuthContext'
import SignUpPage from './pages/SignUp'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
export const AppContent = ()=> {

const {isAuthenticated} = useAuth();
    
      if(!isAuthenticated){
        return (
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/forgot_password" element={<ForgotPasswordPage/>}/>
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Layout>
          </BrowserRouter>
        )
      }


return (<BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                </Routes>
                </Layout>
        </BrowserRouter>
)}