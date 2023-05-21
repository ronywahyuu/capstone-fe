import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import LoginPage from './pages/auth/login.jsx'
import MainLayout from './pages/main-layout.jsx'
import LandingPage from './pages/landing-page.jsx'
import RegisterPage from './pages/auth/register.jsx'
import AboutPage from './pages/about.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: 'about',
        element: <AboutPage/>
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'register',
        element: <RegisterPage/>
      }
    ],
    errorElement: <ErrorPage/>
  },
  {
    path: 'home',
    element : <MainLayout/>,
    children: [
      {
        path: 'timeline',
        element: <div>Halaman Donasi</div>
      },
      {
        path: 'blog',
        element: <div>Halaman Blog</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
