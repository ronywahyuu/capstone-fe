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
import BlogPage from './pages/blog-page.jsx'
import MainPage from './pages/main-page.jsx'
import DetailPage from './pages/detail-page.jsx'
import FormDonasi from './components/home/write.jsx'
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "home",
    element: <MainLayout />,
    children: [
      {
        path: "timeline",
        element: <MainPage />,
      },
      // detail
      {
        path: 'timeline/:id',
        element: <DetailPage/>
      },
      {
        path: "blog",
        element: <MainPage />,
      },
      {
        path: 'saved',
        element: <MainPage/>
      },
      {
        path: 'timeline/write',
        element: <FormDonasi/>
      }
    ]
  }
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
