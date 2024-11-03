import React, { useContext } from 'react';
import useMaintenanceRequests from '../../../hooks/useMaintenanceRequests';
import { Slide } from 'react-awesome-reveal';
import { CardGroup, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import LandlordMaintenanceRequest from './LandlordMaintenanceRequest';

const LandlordMaintenanceRequests = () => {
    const { user } = useContext(AuthContext);
    const [data] = useMaintenanceRequests(user.email, 'landlord');
    console.log(data);
    if(data && user){
        return(
            <div>
                <h1 className='text-center'>Maintenance Requests</h1>
                <Slide>
                    <CardGroup>
                        {
                            data?.map(maintenancerequest => <LandlordMaintenanceRequest
                                key={maintenancerequest._id}
                                maintenancerequest={maintenancerequest}
                            ></LandlordMaintenanceRequest>)
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

export default LandlordMaintenanceRequests;