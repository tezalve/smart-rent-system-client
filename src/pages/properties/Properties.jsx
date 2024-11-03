import React, { useEffect, useState } from 'react';
import PropertyCard from './propertyCard/PropertyCard';
import { CardGroup, Dropdown, Form } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import useApprovedProperties from '../../hooks/useApprovedProperties';

const Properties = () => {
    const [data] = useApprovedProperties();
    const [filteredData, setFilteredData] = useState([]);
    const [locationFilter, setLocationFilter] = useState(''); // For filtering by location
    const [sortCriteria, setSortCriteria] = useState(''); // For sorting

    useEffect(() => {
        // Apply filter
        let filtered = data;
        
        if (locationFilter) {
            filtered = filtered.filter(property => property.location.toLowerCase().includes(locationFilter.toLowerCase()));
        }

        // Apply sorting
        if (sortCriteria === 'priceLowHigh') {
            filtered = filtered.sort((a, b) => a.rent - b.rent);
        } else if (sortCriteria === 'priceHighLow') {
            filtered = filtered.sort((a, b) => b.rent - a.rent);
        } else if (sortCriteria === 'size') {
            filtered = filtered.sort((a, b) => b.size - a.size); // Sort by size descending
        }

        setFilteredData(filtered);
    }, [data, locationFilter, sortCriteria]);

    return (
        <div className='mt-5 p-5'>
            <h1 className='text-center'>All Properties</h1>
            {/* Filter and Sort Controls */}
            <div className='d-flex justify-content-center mb-4'>
                <Form.Control
                    type="text"
                    placeholder="Filter by location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="me-2"
                    style={{ width: '200px' }}
                />

                <Dropdown onSelect={(value) => setSortCriteria(value)}>
                    <Dropdown.Toggle variant="secondary" id="sortDropdown">
                        Sort By
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="priceLowHigh">Price: Low to High</Dropdown.Item>
                        <Dropdown.Item eventKey="priceHighLow">Price: High to Low</Dropdown.Item>
                        <Dropdown.Item eventKey="size">Size</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Slide>
                <CardGroup>
                    {
                        filteredData?.map(property => <PropertyCard
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