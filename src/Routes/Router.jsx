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
                loader: () => fetch('http://localhost:4000/addlist')
            },

            {
                path: 'addlisting',
                Component: AddListing
            },
            {
                path: 'mylistings',
                Component: MyListing
            },
            {
                path: 'myorders',
                Component: MyOrder
            },
            {
                path: 'listdetails/:id',
                element: <PrivateRoutes>
                    <ListDetails></ListDetails>
                </PrivateRoutes>, 
                loader: ({ params }) => fetch(`http://localhost:4000/listdetails/${params.id}`)
            }


        ]
    }
])

export default router;