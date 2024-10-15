import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, Form, Spinner } from 'react-bootstrap';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Registration = () => {

    const pageTitle = 'SRS'

    const { user, createUser } = useContext(AuthContext);
    const [perror, setPerror] = useState('');
    const [pass, setPass] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleToggle = () => {
        if (pass) {
            setPass(false);
        }
        else {
            setPass(true);
        }
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpassword = form.confirmpassword.value;
        const url = form.url.value;
        const user = {name, email, url};
        if (password.length < 6) {
            setPerror('Password length needs to be atleast 6');
            return;
        }
        const cap = /^(?=.*[A-Z]).*$/;
        if (!cap.test(password)) {
            setPerror('Password must contain one uppercase letter');
            return;
        }
        const sym = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!sym.test(password)) {
            setPerror('Password must contain one special symbol');
            return;
        }
        if (password !== confirmpassword) {
            setPerror('passwords do not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(result.user, name, url);
                saveNewUser(user, "user/pass");
                toast.success(`welcome ${name}`);
                setPerror('');
                form.reset();
                navigate(from);
            })
            .catch(error => {
                console.error(error);
                setPerror('Probably Email Already Exists, Maybe try to login?');
            })

        const updateUserData = (user, name, url) => {
            updateProfile(user, {
                displayName: name,
                photoURL: url
            })
                .then(() => {

                })
                .catch(error => {
                    console.error(error);
                })
        }

        const saveNewUser = (user, signInM) =>{
            const displayName = form.name.value;
            const email = user.email;
            const photoURL = form.url.value;
            const role = "tenant";
            const signInMethod = signInM;
            const newUser = {displayName, email, photoURL, role, signInMethod};
            fetch("http://localhost:5000/adduser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
            .then(res => res.json())
            .then(data => {
                
            })
        }
    }

    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }


    return (
        <div className='mx-auto w-50 pt-5'>
            <Helmet><title>{pageTitle}</title></Helmet>

            <div className='shadow p-3 mb-5 bg-dark rounded text-light'>
                <h3 className='text-center py-4 text-warning'>Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="*Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="*Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={pass ? 'password' : 'text'} name="password" placeholder="*Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type={pass ? 'password' : 'text'} name="confirmpassword" placeholder="*Confirm Password" required />
                    </Form.Group>

                    <a className='btn text-white border-0' onClick={handleToggle}>{pass ? 'Show' : 'Hide'}</a>

                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="url" placeholder="Photo URL (Optional)" />
                    </Form.Group>

                    <Button variant="danger" type="submit">
                        Register
                    </Button>
                    <p className='text-danger'>{perror}</p>
                </Form>
            </div>
        </div>
    );
};

export default Registration;