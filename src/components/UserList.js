import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap';
import {TeamContext} from "../context/team-context";
// import {GlobalContext} from '../context/GlobalState';

export const UserList = () => {
    // const {users, removeUser} = useContext(GlobalContext);
    const {players, deletePlayer} = useContext(TeamContext)
    const emptyList = (<h4 className='text-center mt-4'>No user</h4>);

    return players.length ?
        (<ListGroup className='mt-4'>
            {players.map(player => (
                <ListGroupItem className='d-flex' key={player.id}>
                    <strong>{player.name}</strong>
                    <div className='ml-auto'>
                        <Link className='btn btn-warning mr-1' to={`/edit/${player.id}`}>Edit</Link>
                        <Button onClick={() => deletePlayer(player.id)} color='danger'>Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>)
        : emptyList;
}
