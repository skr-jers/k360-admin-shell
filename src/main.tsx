import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom'
import { Layout } from './components/pages/Layout.tsx'
import Superset from './components/pages/Superset.tsx'
import Login from './Login.tsx'
import './i18n'

export const routes: RouteObject[] = [{
  path: '/',
  element: <Login />,
  children: [
    {
      path: 'login',
      element: <h1> Login </h1>
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Superset />
        }
      ]
    }
  ]
}]

const router = createBrowserRouter( routes )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
