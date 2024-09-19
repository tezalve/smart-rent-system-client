import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../layouts/Dashboard";
import AddProperty from "../pages/Dashboard/AddProperty/AddProperty";
import PrivateRoute from "./PrivateRoutes";
import Properties from "../pages/properties/properties";
import MyProperties from "../pages/Dashboard/MyProperties/MyProperties";
import LandlordRoutes from "./LandlordRoutes";
import Musers from "../pages/Dashboard/Musers/Musers";
import AdminRoutes from "./AdminRoutes";
import Mproperties from "../pages/Dashboard/Mproperties/Mproperties";
import UpdateProperty from "../pages/Dashboard/MyProperties/UpdateProperty";
import Home from "../pages/home/Home/Home";
import TenantRoutes from "./TenantRoutes";
import BookedProperties from "../pages/Dashboard/BookedProperties/BookedProperties";
import Registration from "../pages/Registration/Registration";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/properties",
                element: <Properties></Properties>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/addproperty",
                element: <LandlordRoutes><AddProperty></AddProperty></LandlordRoutes>
            },
            {
                path: "/dashboard/myproperties",
                element: <LandlordRoutes><MyProperties></MyProperties></LandlordRoutes>
            },
            {
                path: "/dashboard/updateproperty/:id",
                element: <LandlordRoutes><UpdateProperty></UpdateProperty></LandlordRoutes>,
                loader: ({ params }) => fetch(`https://smart-rent-system-server.vercel.app/property/${params.id}`)
            },
            {
                path: "/dashboard/musers",
                element: <AdminRoutes><Musers></Musers></AdminRoutes>
            },
            {
                path: "/dashboard/mproperties",
                element: <AdminRoutes><Mproperties></Mproperties></AdminRoutes>
            },
            {
                path: "/dashboard/bookedproperties",
                element: <TenantRoutes><BookedProperties></BookedProperties></TenantRoutes>
            }
            

        ]
    }
])

export default router;