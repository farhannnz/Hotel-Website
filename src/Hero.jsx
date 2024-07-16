import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="right">
          <h1>HUNGRY HUB</h1>
          <h6>NAGPUR</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quo repudiandae omnis ducimus, itaque ad deleniti fugiat rerum temporibus perspiciatis, dicta ut adipisci iusto porro ipsam, molestiae non optio. Soluta.</p>
          <button className='table-button'><Link to='/book'>BOOK A TABLE</Link></button>
      </div>
      <div className="left">
      </div>
    </div>
  )
}

export default Hero

