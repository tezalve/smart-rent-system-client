import React, { useContext } from 'react';
import BookedProperty from './BookedProperty';
import useBookedProperties from '../../../hooks/useBookedProperties';
import { AuthContext } from '../../../providers/AuthProviders';
import { Slide } from 'react-awesome-reveal';
import { CardGroup, Spinner } from 'react-bootstrap';

const BookedProperties = () => {
    const { user } = useContext(AuthContext);
    const [data] = useBookedProperties(user.email);
    if(data && user){
        return(
            <div>
                <h1 className='text-center'>Booked Properties</h1>
                <Slide>
                    <CardGroup>
                        {
                            data?.map(property => <BookedProperty
                                key={property._id}
                                property={property}
                            ></BookedProperty>)
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

export default BookedProperties;