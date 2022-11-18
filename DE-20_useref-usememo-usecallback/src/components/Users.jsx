import React from 'react';
import UserItem from './UserItem';

const Users = ({users}) => {
  console.log('USERS COMPONENT RENDERED');

  return (
    <div className="users">
      
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
