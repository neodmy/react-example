import React, {useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { v4 as uuid } from 'uuid';

// import { GlobalContext } from '../context/GlobalState';
import { TeamContext } from '../context/team-context';

export const AddUser = () => {
  const { addPlayer } = useContext(TeamContext);
  const [name, setName] = useState('');
  // const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newPlayer = {
      id: uuid(),
      name,
    };
    addPlayer(newPlayer);
    history.push('/');
  };

  const onChange = (e) => setName(e.target.value);

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  );
}
