import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";

import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";

import Pet_Supplies from "../Pages/Pet & Supplies";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import MyOrder from "../Pages/MyOrder";
import ListDetails from "../Pages/ListDetails";
import Categories from "../Components/Categories";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: 'profile',
                element: <PrivateRoutes>
                    <MyProfile></MyProfile>
                </PrivateRoutes>
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
                loader: () => fetch('http://pawmart10.vercel.app/addlist')
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
                element: <PrivateRoutes>
                    <ListDetails></ListDetails>
                </PrivateRoutes>, 
                loader: ({ params }) => fetch(`http://pawmart10.vercel.app/listdetails/${params.id}`)
            },

            {
                path:'categories/:categoryName',
                Component:Categories
            }




        ]
    }
])

export default router;