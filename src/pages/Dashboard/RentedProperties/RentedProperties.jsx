import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import useRentedProperties from '../../../hooks/useRentedProperties';
import RentedProperty from './RentedProperty';
import { Slide } from 'react-awesome-reveal';
import { CardGroup, Spinner } from 'react-bootstrap';

const RentedProperties = () => {
    const { user } = useContext(AuthContext);
    const [data] = useRentedProperties(user.email);
    if (user && data){
        return (
            <div>
                <h1 className='text-center'>Rented Properties</h1>
                <Slide>
                    <CardGroup>
                        {
                            data?.map(property => <RentedProperty
                                key={property._id}
                                property={property}
                            ></RentedProperty>)
                        }
                    </CardGroup>
                </Slide>
            </div>
        );
    } else {
        return (
            <div>
                <Spinner style = {{position: "fixed", left: "50%"}} animation="border" variant="primary" />
            </div>
        );
    }
};

export default RentedProperties;