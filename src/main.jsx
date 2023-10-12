import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './components/user/Profile'
import Orders from './components/user/Orders'
import Favorites from './components/user/Favorites'
import Wallet from './components/user/Wallet'
import Help from './components/user/Help'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
   path: "profile",
    element: <Profile />
  },
  {
   path: "orders",
    element: <Orders />
  },
  {
   path: "favorites",
    element: <Favorites />
  },
  {
   path: "Wallet",
    element: <Wallet />
  },
  {
   path: "help",
    element: <Help />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
