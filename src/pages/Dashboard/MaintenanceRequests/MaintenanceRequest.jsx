import { faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const MaintenanceRequest = ({maintenancerequest}) => {
    const { user } = useContext(AuthContext);
    return (
        <div className='col-3 p-2'>
            <div className="card align-items-center shadow">
                <img src={maintenancerequest.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">Property: {maintenancerequest.property}</p>
                </div>
                <div className="card-body text-center">
                    <p className="card-title">Tenant Affirmation: {maintenancerequest.tenant_confirmation}</p>
                </div>
                <div className="card-body text-center">
                    <p className="card-title">Landlord Affirmation: {maintenancerequest.landlord_confirmation}</p>
                </div>
                <div className="card-body text-center">
                    {
                        maintenancerequest.resolved == true ?
                            <p className="card-title">Resolved: Yes </p>
                        :
                            <p className="card-title">Resolved: No </p>

                    }
                </div>
                <div className="card-body text-center border-right border-dark">
                    <Link className={maintenancerequest.resolved == false ? "btn disabled" : "btn disabled"} onClick={() => handleDelete(maintenancerequest)} ><FontAwesomeIcon className='fs-2 text-danger' icon={faTrash} /></Link>
                </div>
                <div className="card-body text-center border-right border-dark">
                    <Link className={maintenancerequest.resolved == false ? "btn" : "btn disabled"} onClick={() => handleAffirm(maintenancerequest)} ><FontAwesomeIcon className='fs-2 text-success' icon={faSquareCheck} /></Link>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceRequest;