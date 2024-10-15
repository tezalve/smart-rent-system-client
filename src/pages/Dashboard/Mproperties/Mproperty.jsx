import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import useAllProperties from '../../../hooks/useAllProperties';

const Mproperty = ({ property }) => {

    const [, refetch] = useAllProperties();

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
        toast.success(`Successfully changed status of "${property.building + " " + property.flat_name}" to: "${property.status}"`);
    }

    const handleApprove = () => {
        const status = "approved";
        fetchProperty(status);
    }

    const handleDeny = () => {
        const status = "denied";
        fetchProperty(status);
    }

    return (
        <div className='col-3 p-2 '>
            <div className="card align-items-center">
                <div className="card-body text-center">
                    <img src={property.image} width={"100%"} alt="" />
                </div>
                <div className="card-body text-center">
                    <p className="card-title">Flat: {property.building_name + " " + property.flat_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Availability: {property.availability}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Rent: ${property.rent}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Status: {property.status}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Added By: {property.email}</p>
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

export default Mproperty;