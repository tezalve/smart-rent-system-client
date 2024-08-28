import React, { useContext } from 'react';
import { CardGroup } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import Mproperty from './Mproperty';
import useAllProperties from '../../../hooks/useAllProperties';
import { Slide } from 'react-awesome-reveal';

const Mproperties = () => {

    const [data] = useAllProperties();
    return (
        <div>
            <h1 className='text-center'>Manage Properties</h1>
            <Slide>
                <CardGroup>
                    {
                        data?.map(property => <Mproperty
                            key={property._id}
                            property={property}
                        ></Mproperty>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default Mproperties;