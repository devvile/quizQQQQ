import './App.css'
import { AppContent } from './AppContent'
import {AuthProvider} from './assets/contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <AppContent/>
    </AuthProvider>
  )
}

export default App
