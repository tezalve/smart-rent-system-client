import React, { useContext } from 'react';
import useMaintenanceRequests from '../../../hooks/useMaintenanceRequests';
import MaintenanceRequest from './MaintenanceRequest';
import { Slide } from 'react-awesome-reveal';
import { CardGroup, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';

const MaintenanceRequests = () => {
    const { user } = useContext(AuthContext);
    const [data] = useMaintenanceRequests(user.email);
    console.log(data);
    if(data && user){
        return(
            <div>
                <h1 className='text-center'>Maintenance Requests</h1>
                <Slide>
                    <CardGroup>
                        {
                            data?.map(maintenancerequest => <MaintenanceRequest
                                key={maintenancerequest._id}
                                maintenancerequest={maintenancerequest}
                            ></MaintenanceRequest>)
                        }
                    </CardGroup>
                </Slide>
            </div>
        )
    } else {
        return (
            <div>
                <Spinner style = {{position: "fixed", left: "50%"}} animation="border" variant="primary" />
            </div>
        );
    }
};

export default MaintenanceRequests;