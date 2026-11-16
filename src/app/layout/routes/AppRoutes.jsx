import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate, useParams } from "react-router";
import MainLayout from "../mainLayout";
import Home from "../../../shared/ui/pages/Home";
import ProductDetails from "../../../feature/products/ui/pages/ProductDetails";
import Cart from "../../../feature/carts/ui/pages/Cart";
import Login from "../../../feature/auth/ui/pages/Login";
import PublicRoutes from "../PublicRoutes";
import Register from "../../../feature/auth/ui/pages/Register";
import { hydrateApis } from "../../../feature/auth/apis/authApis";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../feature/auth/store/authSlice";
import ProtectedRoutes from "../ProtectedRoutes";
import Checkout from "../../../feature/checkout/ui/pages/Checkout";

const AppRoutes = () => {
//   const dispatch = useDispatch();


//   const {accessToken} = useSelector((state) => state.auth);

//   const callHydrateApi = async () => {
//     if (!accessToken) return;

//     try {
//       const res = await hydrateApis(accessToken);

//       if (res) {
//         dispatch(loginUserAction(res));
//       }

       
//       console.log('user logged in')
//     } catch (error) {
//       console.log("error in hydration api while calling-->", error);
//     }
//   };

//   useEffect(() => {
//     callHydrateApi();
//   }, [dispatch, accessToken]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: `products/:id`,
          element: <ProductDetails />,
        },
        {
          path: "products/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/auth",
      element: <PublicRoutes />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
        path:'/checkout',
        element:<ProtectedRoutes/>,
        children:[
            {
                path:'',
                element:<Checkout/>
            }
        ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
