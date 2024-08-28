import { faPenToSquare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DropdownDivider } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProperty = ({ property }) => {

    return (
        <div className='col-3 p-2 '>
            <div className="card align-items-center">
                <div className="card-body text-center">
                    <img src={property.image} height={"120px"} alt="" />
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
                <div className={property.status == "pending" ? "btn" : "btn disabled"}>
                    <Link to={`/dashboard/updateproperty/${property._id}`} className="btn"><FontAwesomeIcon className='fs-2' icon={faPenToSquare} /></Link>
                </div>
            </div>
        </div>
    )
};

export default MyProperty;