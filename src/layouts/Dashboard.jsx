import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../providers/AuthProviders';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [individual, setIndividual] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/individual/${user?.email}`)
            .then(res => res.json())
            .then(data => setIndividual(data))
    }, [])
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 bg-dark">
                        <div className="min-vh-100">
                            <div className='text-center'>
                                <NavLink to={'/'}>
                                    SRS
                                </NavLink>
                            </div>
                            {/* check admin or not */}
                            {
                                individual.role == "admin" ?
                                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-center" id="menu">
                                        <li className="nav-item py-4">
                                            <NavLink to={'/dashboard/addproperty'} className="text-decoration-none" style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'white' })}>
                                                Add Property
                                            </NavLink>
                                        </li>
                                    </ul>
                                    :
                                    ""
                            }
                            {
                                individual.role == "admin" ?
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-center" id="menu">
                                    <li className="nav-item py-4">
                                        <NavLink to={'/dashboard/myproperties'} className="text-decoration-none" style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'white' })}>
                                            My Properties
                                        </NavLink>
                                    </li>
                                </ul>
                                :
                                ""
                            }
                        </div>
                    </div>
                    <div className="col-10 py-3">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;