import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap';

import { GlobalContext } from '../context/GlobalState';

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);
    const emptyList = (<h4 className='text-center mt-4'>No user</h4>);

    return users.length ? 
    (<ListGroup className='mt-4'>
        {users.map(user => (
            <ListGroupItem className='d-flex' key={user.id}>
                <strong>{user.name}</strong>
                <div className='ml-auto'>
                    <Link className='btn btn-warning mr-1' to={`/edit/${user.id}`}>Edit</Link>
                    <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
                </div>
            </ListGroupItem>
        ))}
    </ListGroup>)
    : emptyList;
}
