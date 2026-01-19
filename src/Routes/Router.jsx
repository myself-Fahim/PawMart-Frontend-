import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";


import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";

import Pet_Supplies from "../Pages/Pet & Supplies";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import MyOrder from "../Pages/MyOrder";
import ListDetails from "../Pages/ListDetails";
import Categories from "../Components/Categories";
import Error from "../Components/Error";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import { Suspense } from "react";
import Loader from "../Components/Loader";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                Component: Home
            },
         
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },

            {
                path: 'pet_supplies',
                Component: Pet_Supplies,
                loader: () => fetch('https://pawmart10.vercel.app/addlist')
            },
            {
                path: 'about',
                Component: About,
            },
            {
                path: 'contact',
                Component: Contact,
            },

            {
                path: 'addlisting',
                element: <PrivateRoutes>
                    <AddListing></AddListing>
                </PrivateRoutes>
            },
            {
                path: 'mylistings/:email',
                element:<PrivateRoutes>
                    <MyListing></MyListing>
                </PrivateRoutes>,
              
            },
            {
                path: 'myorders/:email',
                element:<PrivateRoutes>
                    <MyOrder></MyOrder>
                </PrivateRoutes>,
            },
            {
                path: 'listdetails/:id',
                element:<Suspense fallback={<Loader></Loader>}>
                     <ListDetails></ListDetails>
                </Suspense>, 
                loader: ({ params }) => fetch(`https://pawmart10.vercel.app/listdetails/${params.id}`)
            },

            {
                path:'categories/:categoryName',
                Component:Categories
            }
        ]
    },
    {
        path:'/dashboard',
        Component:DashboardHome

    },
    {
        path:'*',
        Component:Error
    }
])

export default router;