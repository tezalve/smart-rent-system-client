import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
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
                path: "/dashboard/musers",
                element: <AdminRoutes><Musers></Musers></AdminRoutes>
            }
        ]
    }
])

export default router;