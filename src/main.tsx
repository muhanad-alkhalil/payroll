import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'flatpickr/dist/flatpickr.min.css';
import { AuthProvider } from './features/auth/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <App />
    </AuthProvider>
)
