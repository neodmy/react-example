import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { GlobalContext } from '../context/GlobalState';

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
  });

  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.computedMatch.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push('/');
  };

  const onChange = (e) => console.log(e.target) || setSelectedUser({...selectedUser, name: e.target.value })

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' onChange={onChange} value={selectedUser.name} name='name' placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Edit Name</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  );
}
