// Entry point for the React application.
// Mounts the root <App> component into the #root div defined in index.html.
// BrowserRouter wraps the entire tree so any component in the app can use
// React Router hooks (useNavigate, useLocation, etc.) without needing to
// receive the router as a prop.
// StrictMode intentionally double-invokes renders and effects in development
// to surface side-effect bugs early — it has no impact in production builds.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
