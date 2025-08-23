import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PortfolioMain from '../pages/home/PortfolioMain.jsx'
import { DarkTheme } from '../components/ui/DarkTheme/DarkTheme.jsx'
import { MainRoutes } from '../mainRouts.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkTheme>
      <MainRoutes />
    </DarkTheme>
  </StrictMode>,
)
