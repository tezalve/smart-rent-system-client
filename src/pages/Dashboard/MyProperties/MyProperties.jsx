import React, { useContext } from 'react';
import { Slide } from 'react-awesome-reveal';
import { CardGroup } from 'react-bootstrap';
import MyProperty from './MyProperty';
import { AuthContext } from '../../../providers/AuthProviders';
import useInProperties from '../../../hooks/useInProperties';

const MyProperties = () => {

    const { user } = useContext(AuthContext);
    const [data] = useInProperties(user.email);

    return (
        <div>
            <h1 className='text-center'>My Properties</h1>
            <Slide>
                <CardGroup>
                    {
                        data?.map(property => <MyProperty
                            key={property._id}
                            property={property}
                        ></MyProperty>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default MyProperties;