import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import './style.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},

    {
      path: 'contato',
      element: <Contato />,
    },
    {
      path: 'sobre',
      element: <Sobre />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)