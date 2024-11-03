import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useInProperties from '../../../hooks/useInProperties';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import { toast } from 'react-toastify';

const UpdateProperty = () => {

    const { user } = useContext(AuthContext);
    const prprty = useLoaderData();
    const navigate = useNavigate();

    const [, refetch] = useInProperties();

    const handleUpdateProperty = event => {
        if (prprty.status != "pending"){
            event.preventDefault();
            toast.warn(`${prprty.building_name + " " + prprty.flat_name} is not pending!`);
        }
        else{
            event.preventDefault();
            const _id = prprty._id;
            const form = event.target;
            const image = form.image.value;
            const image2 = form.image2.value;
            const image3 = form.image3.value;
            const building_name = form.building_name.value;
            const flat_name = form.flat_name.value;
            const location = form.location.value;
            const rent = form.rent.value;
            const size = form.size.value;
            const availability = 1;
            const email = user.email;
            const status = "pending";
            const updateProperty = { _id, image, image2, image3, building_name, flat_name, location, rent, size, availability, email, status }
            fetch("http://localhost:5000/updateproperty", {
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
            toast.success(`Successfully Updated ${building_name + " " + flat_name}`);
            navigate('/dashboard/myproperties');
        }
    }

    return (
        <div>
            <Form onSubmit={handleUpdateProperty}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='image' type="text" defaultValue={prprty?.image} placeholder="Enter Picture URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL 2</Form.Label>
                    <Form.Control name='image2' type="text" defaultValue={prprty?.image2} placeholder="Enter Picture URL"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL 3</Form.Label>
                    <Form.Control name='image3' type="text" defaultValue={prprty?.image3} placeholder="Enter Picture URL"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Building Name</Form.Label>
                    <Form.Control name='building_name' type="text" defaultValue={prprty?.building_name} placeholder="Enter Building Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Flat Name</Form.Label>
                    <Form.Control name='flat_name' type="text" defaultValue={prprty?.flat_name} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location Name</Form.Label>
                    <Form.Control name='location' type="text" defaultValue={prprty?.location} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Landlord Email</Form.Label>
                    <Form.Control name='email' type="email" defaultValue={prprty?.email} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control name='availability' type="number" defaultValue={prprty?.availability} placeholder="Availability" readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Size</Form.Label>
                    <Form.Control name='size' type="number" defaultValue={prprty?.size} placeholder="Size" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rent</Form.Label>
                    <Form.Control name='rent' type="number" defaultValue={prprty?.rent} placeholder="Enter Rent" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UpdateProperty;