import React from 'react';
import User from '../User/User';
import useUsers from '../../../hooks/useUsers';
import { CardGroup } from 'react-bootstrap';

const Musers = () => {

    const [data] = useUsers();

    return (
        <div>
            <h1 className='text-center'>All Users</h1>
            <CardGroup>
                {
                    data?.map(user => <User
                        key={user._id}
                        user={user}
                    ></User>)
                }
            </CardGroup>
        </div>
    );
};

export default Musers;