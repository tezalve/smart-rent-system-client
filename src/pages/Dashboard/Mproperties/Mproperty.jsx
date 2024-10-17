import { faPowerOff, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import useAllProperties from '../../../hooks/useAllProperties';
import { NavLink } from 'react-router-dom';

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
        toast.success(`Successfully changed status of "${property.building_name + " " + property.flat_name}" to: "${status}"`);
    }

    const handleApprove = () => {
        const status = "approved";
        fetchProperty(status);
    }

    const handleDeny = () => {
        const status = "denied";
        fetchProperty(status);
    }

    const handleRevise = () => {
        const status = "pending";
        fetchProperty(status);
    }

    return (
        <div className='col-3 p-1'>
            <div className="card align-items-center">
                <div className="card-body text-center">
                    <img src={property.image} width={"100%"} height={"100vw"} alt="" />
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
                    <p className="card-title">Added By:<br />{property.email}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={property.status == "pending" || !property.status ? "btn m-1" : "btn disabled m-1"} onClick={handleApprove}><FontAwesomeIcon className='fs-2 text-success' icon={faThumbsUp} /></a>
                    <a className={property.status == "pending" || !property.status ? "btn m-1" : "btn disabled m-1"} onClick={handleDeny}><FontAwesomeIcon className='fs-2 text-danger' icon={faThumbsDown} /></a>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={property.status != "pending" || !property.status ? "btn" : "btn disabled"} onClick={handleRevise}><FontAwesomeIcon className='fs-2' icon={faPowerOff} /></a>
                </div>
                <NavLink className="m-3 btn text-white" to={`/details/${property._id}`} style={{backgroundColor: 'FireBrick'}}>Details</NavLink>
            </div>
        </div>
    );
};

export default Mproperty;