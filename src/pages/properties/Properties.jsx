import React, { useEffect, useState } from 'react';
import PropertyCard from './propertyCard/PropertyCard';
import { CardGroup } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import useApprovedProperties from '../../hooks/useApprovedProperties';

const Properties = () => {
    const [data] = useApprovedProperties();

    return (
        <div className='mt-5 p-5'>
            <h1 className='text-center'>All Properties</h1>
            <Slide>
                <CardGroup>
                    {
                        data?.map(property => <PropertyCard
                            key={property._id}
                            property={property}
                        ></PropertyCard>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default Properties;