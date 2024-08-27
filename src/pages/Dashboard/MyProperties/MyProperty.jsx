import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MyProperty.css';

const MyProperty = ({ property }) => {

    const fetchProperty = (status) => {
        fetch(`http://localhost:5000/updatepropertystatus/${property._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        refetch();
        refetch();
        toast.success(`Successfully changed status of class: "${cls.class_name}"`);
    }

    const handleApprove = () => {
        const status = "approved";
        // fetchUser(status);
    }

    const handleDeny = () => {
        const status = "denied";
        // fetchUser(status);
    }

    return (
        <div className='col-12 p-2 '>
            <div className="card align-items-center text-white" style={{ backgroundImage: `url(${property.image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition: "center" }}>
                <div className="card-body text-center">
                    <p className="card-title">Class: {property.building_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Instructor name: {property.flat_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Available Seats: {property.availability}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Price: ${property.rent}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Status: {property.status}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={property.status == "pending" || !property.status ? "btn" : "btn disabled"} onClick={handleApprove}><FontAwesomeIcon className='fs-2 text-success' icon={faThumbsUp} /></a>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={property.status == "pending" || !property.status ? "btn" : "btn disabled"} onClick={handleDeny}><FontAwesomeIcon className='fs-2 text-danger' icon={faThumbsDown} /></a>
                </div>
            </div>
        </div>
    );
};

export default MyProperty;