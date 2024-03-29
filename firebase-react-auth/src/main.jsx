import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import LogoutBtn from './components/LogoutBtn.jsx'
import ProtectedRoute from './protectedRoute/ProtectedRoute.jsx'
import Card from './components/Card.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:(
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login /> ,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/logout',
        element: <LogoutBtn />
      },
      {
        path: '/card',
        element:(
          <ProtectedRoute>
            <Card />
          </ProtectedRoute>
        ),
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
