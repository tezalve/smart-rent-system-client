import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookedProperty = ({ property }) => {
    
    const handleDelete = (property) => {
        var result = confirm("Are you sure you want to delete?");
        if(result && property){
            const _id = property._id;
            const deleted = true;
            const updateProperty = { _id, deleted }
            fetch("http://localhost:5000/deletebookedproperty", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateProperty),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            toast.success(`Successfully removed ${property.prprty} from booking`);
            navigate('/dashboard/');

        }
    }
    

    return (
        <div className='col-3 p-2'>
            <div className="card align-items-center">
                <img src={property.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">Property: {property.prprty}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <Link className={property.payment_done == false ? "btn" : "btn disabled"} onClick={() => handleDelete(property)} ><FontAwesomeIcon className='fs-2 text-danger' icon={faTrash} /></Link>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <Link to={`/dashboard/payment/${property._id}`} className={property.payment_done == false ? "btn" : "btn disabled"} ><FontAwesomeIcon className='fs-2 text-success' icon={faMoneyBill} /></Link>
                </div>
            </div>
        </div>
    );
};

export default BookedProperty;