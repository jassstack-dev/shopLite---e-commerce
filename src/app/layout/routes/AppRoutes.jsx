import React from 'react'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router'
import MainLayout from '../mainLayout'
import Home from '../../../shared/ui/pages/Home'
import ProductDetails from '../../../feature/products/ui/pages/ProductDetails'
import Cart from '../../../feature/carts/ui/pages/Cart'

const AppRoutes = () => {

   
    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path: '',
                    element:<Home/>
                },
                {
                    path:`products/:id`,
                    element:<ProductDetails/>
                },
                {
                    path:'products/cart',
                    element:<Cart/>
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes