import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    const property = useLoaderData();

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
    const handleSelect = () => {
        if (individual?.role === 'tenant') {
            if (!alreadybooked && !full){
                const user_email = user.email;
                const property_id = property._id;
                const image = property.image;
                const prprty = property.building_name + " " + property.flat_name;
                const landlord_email = property.email;
                const rent = property.rent;
                const payment_done = false;
                const deleted = false;
                const bookedproperty = { user_email, property_id, image, prprty, landlord_email, rent, payment_done, deleted};
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
        <div className='py-5 d-flex justify-content-center'>
            <img src={property.image} width={"100%"} height={"auto"} style={{maxWidth: "500px"}} alt="" />
            <div className= {full || alreadybooked ? "card bg-warning" : "card"} style={{width: '18rem'}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Building: {property.building_name}</li>
                    <li className="list-group-item">Flat: {property.flat_name}</li>
                    <li className="list-group-item">Size: {property.size} sqft</li>
                    <li className="list-group-item">Location: {property.location}</li>
                    <li className="list-group-item">Availability: {property.availability}</li>
                    <li className="list-group-item">Rent: {property.rent} BDT</li>
                    <li className="list-group-item">Size: {property.size}</li>
                    <li className="list-group-item text-center">
                        <a className={ property.availability <= 0 ? "btn text-white disabled" : " text-white btn"} onClick={handleSelect} style={{backgroundColor: "FireBrick"}}>
                                Book now!
                                <FontAwesomeIcon className='plus px-1' icon={faCirclePlus} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Details;