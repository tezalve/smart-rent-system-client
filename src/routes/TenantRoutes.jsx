import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const TenantRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const [indLoading, setIndLoading] = useState(true);
    const [individual, setIndividual] = useState([]);

    // to shwo spiiner & progress bar while fetching data
    if (loading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }

    useEffect(() => {
        fetch(`https://smart-rent-system-server.vercel.app/individual/${user?.email}`)
            .then(res => res.json())
            .then(data => setIndividual(data))
            .then(setIndLoading(false))
    }, [])

    if (indLoading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }

    if (!indLoading) {
        if (individual.role == "tenant") {
            return children;
        }
    } else {
        toast.warn("Unauthorized Access");
    }

    // saving the last route before login 
    // return <Navigate to="/Dashboard" state={{ from: location }} replace={true} ></Navigate>
};

export default TenantRoutes;