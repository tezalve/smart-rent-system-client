import React, { useEffect, useState } from 'react';
import PropertyCard from './propertyCard/PropertyCard';
import { CardGroup } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/properties`)
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])

    return (
        <div className='mt-5 bg-image p-5' style={{ backgroundImage: `url("https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/events-background-4.jpg")`, backgroundAttachment: "fixed" }}>
            <h1 className='text-center'>All Properties</h1>
            <Slide>
                <CardGroup>
                    {
                        properties?.map(property => <PropertyCard
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