import React from 'react'
import { Link } from 'react-router-dom'

function Feed({img,id}) {
  return (
    <div>
        <Link to={`/post/${id}`}>
            <div className=''>
                <img src={img} alt="" className='w-[280px] h-[250px] object-cover flex-grow' />
            </div>
        </Link>
      
    </div>
  )
}

export default Feed
