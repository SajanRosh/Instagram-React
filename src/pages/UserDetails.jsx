import React from 'react';
import Users from './Users';
import { useParams } from 'react-router-dom';
import Feed from '../components/Feed';

function UserDetails() {
  let {username} = useParams();
  let userDetails = Users.find(user => user.username == username);
  console.log(userDetails);
  
  return (
    <div>
      <div className='w-[60vw] mx-auto mt-16'>
        <div className='w-[700px] mx-auto'>
          <div className="flex items-center gap-5">
            <img src={userDetails.image} className='h-32 w-32 rounded-full object-cover' alt="" />
            <div>
              <h1 className='text-2xl font-bold'>{userDetails.name}</h1>
              <h1 className='font-semibold'>{userDetails.profession}</h1>
              <h1 className='mt-2 text-neutral-600'>{userDetails.desc}</h1>
              <div className="flex gap-3 text-xs mt-3">
                <button className='bg-neutral-200 px-3 py-2 rounded-lg'>{userDetails.followers} Followers</button>
                <button className='bg-neutral-200 px-3 py-2 rounded-lg'>{userDetails.following} Following</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mt-10 gap-3 flex-wrap mx-auto mb-24'>
            {
              userDetails.posts.map(post => <Feed key={post.id} img={post.image}id={post.id}/>)
            }
          </div>
      </div>
    </div>
  )
}

export default UserDetails
