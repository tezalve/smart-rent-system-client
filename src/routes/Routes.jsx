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
import Details from "../pages/Details/Details";
import RentedProperties from "../pages/Dashboard/RentedProperties/RentedProperties";
import AddMaintenance from "../pages/Dashboard/RentedProperties/AddMaintenance";
import MaintenanceRequests from "../pages/Dashboard/MaintenanceRequests/MaintenanceRequests";
import LandlordMaintenanceRequests from "../pages/Dashboard/LandlorMaintenanceRequests/LandlordMaintenanceRequests";

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
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/property/${params.id}`)
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
                loader: ({ params }) => fetch(`http://localhost:5000/property/${params.id}`)
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
            },
            {
                path: "/dashboard/rentedproperties",
                element: <TenantRoutes><RentedProperties></RentedProperties></TenantRoutes>
            },
            {
                path: "/dashboard/maintenancerequests",
                element: <TenantRoutes><MaintenanceRequests></MaintenanceRequests></TenantRoutes>
            },
            {
                path: "/dashboard/landlordmaintenancerequests",
                element: <LandlordRoutes><LandlordMaintenanceRequests></LandlordMaintenanceRequests></LandlordRoutes>
            },
            {
                path: "/dashboard/addmaintenance/:id",
                element: <TenantRoutes><AddMaintenance></AddMaintenance></TenantRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/rentedproperty/${params.id}`)
            }
        ]
    }
])

export default router;