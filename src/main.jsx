import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import App from './App.jsx'

import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/contacto',
      element: <Contact />,
    },
    {
      path: '/productos',
      element: <Products />,
    },
  ],
  { basename: '/animated-navlinks' }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[#ECE6DA] w-full h-lvh flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
