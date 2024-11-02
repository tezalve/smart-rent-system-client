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
import { NavLink, useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [individual, setIndividual] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/individual/${user?.email}`)
            .then(res => res.json())
            .then(data => setIndividual(data))
    },[])
    // if(individual.length < 1){
    //     navigate('/');
    // }

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
    // const handleSelect = () => {
    //     if (individual?.role === 'tenant') {
    //         if (!alreadybooked && !full){
    //             const user_email = user.email;
    //             const property_id = property._id;
    //             const image = property.image;
    //             const prprty = property.building_name + " " + property.flat_name;
    //             const landlord_email = property.email;
    //             const rent = property.rent;
    //             const payment_done = false;
    //             const deleted = false;
    //             const bookedproperty = { user_email, property_id, image, prprty, landlord_email, rent, payment_done, deleted};
    //             fetch("http://localhost:5000/bookproperty", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(bookedproperty),
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                 })
    //             toast.success(`Successfully booked ${property.size + " " + property.building_name + " " + property.flat_name}`)
    //             navigate('/dashboard/bookedproperties');
    //         } else {
    //             if(alreadybooked){
    //                 toast.warn("Already booked");
    //             } else if (full){
    //                 toast.warn("Full");
    //             } else {
    //                 toast.warn("Booking Failed Miserably");
    //             }
    //         }
    //     }else if (!user) {
    //         toast.warn("Please Log in");
    //     } else {
    //         toast.warn("Only tenants can book");
    //     }
    // }

    return (
        <div className={ full || alreadybooked ? "col-3 bg-warning" : "col-3"}>
            <img className='card-img-top p-2' src={property.image} height={'250px'} width={'250px'} style={{objectFit: 'cover'}} alt="..." />
            {/* <div className="card-body text-center">
                <h6 className="card-text">Building: {property.building_name}</h6>
            </div>
            <div className="vr"></div>
            <div className="card-body text-center">
                <h6 className="card-text">Flat: {property.flat_name}</h6>
            </div>
            <div className="vr"></div>
            <div className="card-body text-center">
                <h6 className="card-text">Size: {property.size}</h6>
            </div>
            <div className="vr"></div>
            <div className="card-body text-center">
                <h6 className="card-text">Location: {property.location}</h6>
            </div>
            <div className="vr"></div>
            <div className="card-body text-center">
                <h6 className="card-text">Availability: {property.availability}</h6>
            </div>
            <div className="vr"></div>
            <div className="card-body text-center">
                <h6 className="card-text">Rent: ${property.rent}</h6>
            </div>
            <div className="vr"></div> */}
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Building: {property.building_name}</li>
                <li className="list-group-item">Flat: {property.flat_name}</li>
                <li className="list-group-item">Size: {property.size} sqft</li>
                <li className="list-group-item">Location: {property.location}</li>
                <li className="list-group-item">Availability: {property.availability}</li>
                <li className="list-group-item">Rent: ${property.rent}</li>
                {/* <li className="list-group-item">
                    <a className={ property.availability <= 0 ? "btn disabled" : "btn"} onClick={handleSelect}><FontAwesomeIcon className='plus' icon={faCirclePlus} /></a>
                </li> */}
                <li className="list-group-item">
                    <NavLink className="m-3 btn text-white" to={`/details/${property._id}`} style={{backgroundColor: 'FireBrick'}}>Details</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default PropertyCard;