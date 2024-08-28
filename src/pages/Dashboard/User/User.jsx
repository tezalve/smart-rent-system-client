import { faHammer, faPeopleRoof, faPersonCane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useUsers from '../../../hooks/useUsers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = ({ user }) => {

    const [, refetch] = useUsers();
    const fetchUser = (role) => {
        fetch(`http://localhost:5000/updateuser/${user.email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            refetch();
            refetch();
        toast.success(`Successfully changed role of User: "${user.displayName}"`);
    }
    const handleLandlord = () => {
        const role = "landlord";
        fetchUser(role);
    }

    const handleAdmin = () => {
        const role = "admin";
        fetchUser(role);
    }

    const handleTenant = () => {
        const role = "tenant";
        fetchUser(role);
    }

    return (
        <div className='col-md-12 py-1'>
            <div className="card flex-row align-items-center">
                <img src={user.photoURL} width={"100px"} height={"100px"} className="" alt="..." />
                <div className="card-body">
                    <p className="card-title text-center">Name: {user.displayName}</p>
                </div>
                <div className="card-body">
                    <p className="card-title text-center">Email: {user.email}</p>
                </div>
                <div className="card-body">
                    <p className="card-title text-center">Role: {user.role}</p>
                </div>
                <div>
                    <Link className={user.role != "admin" ? "btn fa-3x text-warning" : "btn fa-3x text-muted disabled"} onClick={handleAdmin}><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon></Link>
                </div>
                <div className='px-1'>
                    <Link className={user.role != "landlord" && user.role != "admin" ? "btn fa-3x text-warning" : "btn fa-3x text-muted disabled"} onClick={handleLandlord}><FontAwesomeIcon icon={faPersonCane}></FontAwesomeIcon></Link>
                </div>
                <div className='px-1'>
                    <Link className={user.role != "tenant" && user.role != "admin" ? "btn fa-3x text-warning" : "btn fa-3x text-muted disabled"} onClick={handleTenant}><FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default User;