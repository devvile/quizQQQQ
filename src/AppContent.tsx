import Layout from './components/shared/Layout'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './assets/pages/LoginPage'
import HomePage from './assets/pages/HomePage'
import Categories from './assets/pages/Categories'

import { useAuth } from './assets/contexts/AuthContext'

export const AppContent = ()=> {

const {isAuthenticated} = useAuth();
    
      if(!isAuthenticated){
        return (
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
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