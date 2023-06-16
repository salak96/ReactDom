import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/layouts/Banner'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react'
const router = createBrowserRouter([
    {
      path: '/',
      element: <Banner />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
      ],
    },
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
