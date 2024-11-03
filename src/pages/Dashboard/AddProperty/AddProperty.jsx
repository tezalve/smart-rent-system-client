import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

const AddProperty = () => {
    const { user } = useContext(AuthContext);

    const handleAddproperty = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;
        const building_name = form.building_name.value;
        const flat_name = form.flat_name.value;
        const location = form.location.value;
        const rent = form.rent.value;
        const size = form.size.value;
        const available_from = form.available_from;
        const availability = 1;
        const email = user.email;
        const status = "pending";
        const newProperty = { image, image2, image3, building_name, flat_name, location, rent, size, availability, available_from, email, status }
        fetch("http://localhost:5000/addproperty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProperty),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        form.reset();
        toast.success(`Successfully Added ${size + " " + building_name + " " + flat_name}`)
    }

    return (
        <div>
            <Form onSubmit={handleAddproperty}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='image' type="text" placeholder="Enter Picture URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL 2</Form.Label>
                    <Form.Control name='image2' type="text" placeholder="Enter Picture URL (Optional)"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL 3</Form.Label>
                    <Form.Control name='image3' type="text" placeholder="Enter Picture URL (Optional)"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Building Name</Form.Label>
                    <Form.Control name='building_name' type="text" placeholder="Enter Building Name" required />
                </Form.Group>
                <Form.Group className="mb-3" readOnly>
                    <Form.Label>Flat Name</Form.Label>
                    <Form.Control name='flat_name' type="text" placeholder="Enter Flat Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name='location' type="text" placeholder="Enter Location" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available From: </Form.Label>
                    <Form.Control name='available_from' type="date" placeholder="Enter Location" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rent in BDT</Form.Label>
                    <Form.Control name='rent' type="number" placeholder="Enter Rent in BDT" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Size in SQFT</Form.Label>
                    <Form.Control name='size' type="number" placeholder="Enter Size in SQFT" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Landlord Email</Form.Label>
                    <Form.Control name='landlord_email' type="email" defaultValue={user?.email} readOnly/>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default AddProperty;