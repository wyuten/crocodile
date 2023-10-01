import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import indexPage from './pages/index.tsx'
import shiftGraphPage from './pages/shift-graph.tsx'
import './index.css' // глобальные стили

const router = createBrowserRouter([
  {
    path: "/",
    element: indexPage(),
  },
  {
    path: "/shift-graph",
    element: shiftGraphPage(),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
