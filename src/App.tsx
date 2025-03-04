import './App.css'
import { AppContent } from './AppContent'
import {AuthProvider} from './contexts/AuthContext'
import { ToastProvider } from './contexts/ToastContext'

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppContent/>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
