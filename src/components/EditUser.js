import React, {useState, useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

// import { GlobalContext } from '../context/GlobalState';
import {TeamContext} from '../context/team-context';

export const EditUser = (props) => {
    const {players, editPlayer} = useContext(TeamContext);
    const [selectedPlayer, setSelectedPlayer] = useState({
        id: '',
        name: '',
    });

    // const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentPlayerId = props.computedMatch.params.id;

    useEffect(() => {
        const selectedPlayerTemp = players.find(player => player.id === currentPlayerId);
        setSelectedPlayer(selectedPlayerTemp);
    }, [currentPlayerId, players]);

    const onSubmit = () => {
        editPlayer(selectedPlayer);
        history.push('/');
    };

    const onChange = (e) => console.log(e.target) || setSelectedPlayer({...selectedPlayer, name: e.target.value})

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' onChange={onChange} value={selectedPlayer.name} name='name'
                       placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit'>Edit Name</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    );
}
