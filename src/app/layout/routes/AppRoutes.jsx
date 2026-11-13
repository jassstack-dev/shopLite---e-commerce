import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../mainLayout'
import Home from '../../../shared/ui/pages/Home'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path: '',
                    element:<Home/>
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes