import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => [])
            .then(error => console.error(error));
    }
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div>
                    <Link id='home' className='text-decoration-none' style={{ color: 'black' }}>
                        Smart Rent System
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" area-controls="navbarNavDropdown" area-expanded="false" area-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center d-flex justify-content-between">
                        <li className="nav-item active p-1">
                            <NavLink id='home' className='text-decoration-none' to={"/"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item active p-1">
                            <NavLink id='home' className='text-decoration-none' to={"/properties"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                Properties
                            </NavLink>
                        </li>
                        {
                            user ?
                                <li className="nav-item active p-1">
                                    {/* had to encode the email string so the route works, decoded in server */}
                                    <NavLink id='home' className='text-decoration-none' to={`/dashboard`} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                        Dashboard
                                    </NavLink>

                                </li>
                                : ""
                        }
                    </ul>
                </div>
                <div>
                        {
                            user ?
                                <>
                                    <span className='p-1'>
                                        <Image title={user.displayName} className='' style={{ width: "40px", height: "40px" }} src={user.photoURL} roundedCircle></Image>
                                    </span>
                                    <Button className='btn' onClick={handleLogOut} style={{ backgroundColor: "FireBrick", border: "0"}}>
                                        Signout
                                    </Button>
                                </>
                                :
                                <>
                                    <NavLink id='login' className='text-decoration-none' to={"/login"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                        Login
                                    </NavLink>
                                </>
                        }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;