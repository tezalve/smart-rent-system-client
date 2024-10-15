import React, { useContext, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const pageTitle = 'SRS';

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [pass, setPass] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    // storing the last location accessed to reroute after login
    const from = location.state?.from?.pathname || '/';

    const handleToggle = () =>{
        if(pass){
            setPass(false);
        }
        else{
            setPass(true);
        }
    }

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('');
                form.reset();
                toast.success(`Welcome ${loggedUser.displayName}`)
                navigate(from);
            })
            .catch(error => {
                console.error(error);
                setError('Wrong email or password');
            })
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                saveNewUser(loggedUser, 'google');
                toast.success(`Welcome ${loggedUser.displayName}`)
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const saveNewUser = (user, signInM) =>{
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
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
                <h3 className='text-center py-4 text-warning'>Login</h3>
                <Form onSubmit={handleLogin} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={pass?'password':'text'} name='password' placeholder="Password"/>
                        <a className='btn text-white border-0' onClick={handleToggle}>{pass? 'Show': 'Hide'}</a>
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Login
                    </Button>
                    <p className='text-danger'>{error}</p>
                    <Link className='text-light' to={'/registration'}>
                        New To SRS?
                    </Link>
                    <br />
                    <br />
                    <Button style={{ marginRight: "10px" }} onClick={handleGoogleSingIn} variant="danger">
                        Google Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;