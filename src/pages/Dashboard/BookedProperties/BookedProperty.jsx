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

    bKash.init({
        //options -
        //1) 'checkout' : Performs a single checkout.
        paymentMode: 'checkout',

        //paymentRequest format : { amount: _AMOUNT, intent: _INTENT };
        //intent : sale - immediate trx
        //intent : authorization - needs an additional 'Capture' call for trx
        //max two decimal points allowed in amount value.
        //paymentRequest will be ignored for paymentMode 'addWalletOnly'. Just keep it as blank object (paymentRequest:{})
        paymentRequest: { amount: '100.50', intent: 'sale' },

        createRequest: function (request) {


            //CALL YOUR BACKEND'S CREATE METHOD HERE
            //IF THE CALL IS SUCCESSFUL, SEND THE CREATE RESPONSE DATA IN bKash.create().onSuccess() METHOD
                bKash.create().onSuccess(createResponseData);
            //ELSE, CALL bKash.create().onError() METHOD. bKash will run it's clean up code from there
                bKash.create().onError();

        },
        executeRequestOnAuthorization: function () {


            //CALL YOUR BACKEND'S EXECUTE METHOD HERE
            //IF THE CALL IS SUCCESSFUL, DISPLAY YOUR SUCCESS PAGE
                window.location.href = "your_success_page.html";
            //ELSE, CALL bKash.execute().onError() METHOD. bKash will run it's clean up code from there
                bKash.execute().onError();

        },
        onClose : function () {
            //define what happens if the user closes the pop up window

            //your code goes here
        }
    });


    //OPTIONAL function
    //AFTER CALLING bKash.init, you can call bKash.reconfigure method according to your needs

    //    bKash.reconfigure({
    //      paymentMode: 'newPaymentMode',
    //        paymentRequest: 'newPaymentRequest'
    //    });

    // NOTE : VIEW PAGE SOURCE TO SEE REAL LIFE IMPLEMENTATION
    

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
                <button id="bKash_button" disabled="disabled">Pay With bKash</button>
            </div>
        </div>
    );
};

export default BookedProperty;