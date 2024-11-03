import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import { toast } from 'react-toastify';

const AddMaintenance = () => {

    const { user } = useContext(AuthContext);
    const prprty = useLoaderData();
    const navigate = useNavigate();
    console.log(prprty);
    const handleAddMaintenance = event => {
        event.preventDefault();
        const form = event.target;
        const property_id = prprty.property_id;
        const image = form.image.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;
        const property = form.prprty.value;
        const tenant_email = user.email;
        const landlord_email = prprty.landlord_email;
        const problem_in_detail = prprty.problem_in_detail;
        const landlord_confirmation = "pending";
        const tenant_confirmation = "pending";
        const resolved = false;
        const deleted = false;
        const newMaintenance = { property_id, image, image2, image3, property, problem_in_detail, tenant_email, landlord_email, landlord_confirmation,  tenant_confirmation, resolved, deleted}
        fetch("http://localhost:5000/addmaintenance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMaintenance),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        form.reset();
        toast.success(`Successfully Requested Maintenance for ${prprty.prprty}`)
    }

    return (
        <div>
            <h1 className='text-center'>Maintenance Rquest</h1>
            <Form onSubmit={handleAddMaintenance}>
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
                    <Form.Label>Property</Form.Label>
                    <Form.Control name='prprty' type="text" defaultValue={prprty?.prprty} placeholder="Enter Building Name" readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Landlord Email</Form.Label>
                    <Form.Control name='landlord_email' type="email" defaultValue={prprty?.landlord_email} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Problem in Detail</Form.Label>
                    <Form.Control name='problem_in_detail' type="text" as="textarea" rows={1}/>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddMaintenance;