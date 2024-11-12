import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import LandingPage from './components/LandingPage.jsx'
import App from './components/AnnaleringPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import router from './routes/router.jsx'
// import { RouterProvider } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )