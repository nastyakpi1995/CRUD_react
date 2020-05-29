import React from 'react';
import {Route} from 'react-router-dom';
import UserList from './userList/index';
import CreatePeople from './form/Index';
import { UserBlock } from '../view/styled/index';

const User = () => {
  return (
    <UserBlock>
      <UserList />
      <Route path="/createPeople">
        <CreatePeople />
      </Route>
    </UserBlock>
  );
};


export default User;
