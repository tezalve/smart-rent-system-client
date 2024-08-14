import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {  Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // to shwo spiiner & progress bar while fetching data
    if (loading) {
        return (
            <div>
                <Spinner style = {{position: "fixed", left: "50%"}} animation="border" variant="primary" />
            </div>
        );
    }

    if (user) {
        return children;
    }
    else{
        toast.warn("Please Log In First")
    }

    // saving the last route before login 
    return <Navigate to="/login" state={{ from: location }} replace={true} ></Navigate>
};

export default PrivateRoute;