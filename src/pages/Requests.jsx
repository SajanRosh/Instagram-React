import React from 'react';
import Users from './Users';
import UserCard from '../components/UserCard';

function Requests() {
  return (
    <div>
      <div className='w-[400px] mx-auto mt-[55px] mb-24'>
        <h1 className='font-bold text-2xl text-center'>Manage all your Requests</h1>
        <p className='text-neutral-600 mt-4'>Review and manage alll your requests and user tags on the posts</p>
        <div className='mt-7'>
            {
                Users.map(user => <UserCard key={user.username} img={user.image} name={user.name} prof={user.profession} username={user.username}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default Requests
