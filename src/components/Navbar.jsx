import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='h-16 border-b-2 mt-5'>
        <div className='w-[80vw] mx-auto'>
            <div className="flex justify-between items-center">
                <Link to={"/"}>
                    <img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="" />
                </Link>
                <div className="flex gap-3 text-neutral-600">
                    <Link to={'/requests'}><h1>Requests</h1></Link>
                    {/* <Link to={'/about'}><h1>About Us</h1></Link> */}
                    <h1><a href="https://about.instagram.com/" target='_blank'>About Us</a></h1>
                    <Link to={'/error'}> <h1>Random Link</h1></Link>
                   
                </div>
            </div>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
