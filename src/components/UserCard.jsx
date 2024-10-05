import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({img,name,prof,username}) {
  return (
    <div>
        <Link to={`/user/${username}`}>
            <div className='flex gap-4 items-center mt-5'>
                <img src={img} className='h-16 w-16 rounded-full object-cover' alt="" />
                <div>
                    <h1>{name}</h1>
                    <h1 className='text-sm text-neutral-600'>{prof}</h1>
                </div>
            </div>
        </Link>
      
    </div>
  )
}

export default UserCard
