import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import './PropertyCard.css'
import useIndividual from '../../../hooks/useIndividual';
import useApprovedProperties from '../../../hooks/useApprovedProperties';
import { Spinner } from 'react-bootstrap';
import useBookedProperties from '../../../hooks/useBookedProperties';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [individual, setIndividual] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/individual/${user?.email}`)
            .then(res => res.json())
            .then(data => setIndividual(data))
    },[])
    if(individual.length < 1){
        navigate('/');
    }

    const [bookedproperties, setBookedproperties] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookedproperties/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedproperties(data))
    },[])

    var alreadybooked = false;
    var full = false;
    bookedproperties?.map(entry => {
        if(entry.property_id === property._id){
            alreadybooked = true;
        }
        if(property.availability <= 0){
            full = true;
        }
    })
    const handleSelect = () => {
        if (individual?.role === 'tenant') {
            if (!alreadybooked && !full){
                const user_email = user.email;
                const property_id = property._id;
                const image = property.image;
                const prprty = property.building_name + " " + property.flat_name;
                const landlord_email = property.email;
                const payment_done = false;
                const deleted = false;
                const bookedproperty = { user_email, property_id, image, prprty, landlord_email, payment_done, deleted};
                fetch("http://localhost:5000/bookproperty", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookedproperty),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                toast.success(`Successfully booked ${property.size + " " + property.building_name + " " + property.flat_name}`)
                navigate('/dashboard/bookedproperties');
            } else {
                if(alreadybooked){
                    toast.warn("Already booked");
                } else if (full){
                    toast.warn("Full");
                } else {
                    toast.warn("Booking Failed Miserably");
                }
            }
        }else if (!user) {
            toast.warn("Please Log in");
        } else {
            toast.warn("Only tenants can book");
        }
    }

    return (
        <div className='col-md-12 p-5'>
            <div className={ full || alreadybooked ? "card flex-row align-items-center bg-warning" : "card flex-row align-items-center"}>
                <img src={property.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <h6 className="card-title">Building: {property.building_name}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Flat: {property.flat_name}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Size: {property.size}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Location: {property.location}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Availability: {property.availability}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Rent: ${property.rent}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <a className={ property.availability <= 0 ? "btn disabled" : "btn"} onClick={handleSelect}><FontAwesomeIcon className='plus' icon={faCirclePlus} /></a>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;