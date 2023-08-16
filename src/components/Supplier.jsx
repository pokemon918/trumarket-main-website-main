import React from 'react'
import { Link } from 'react-router-dom'

const Supplier = () => {
  return (
    <div className='supplier-main'>
        <div className='custom-container'>
            <h1>Are you a supplier?</h1>
            <p>We provide a free online space where you can post your business profiles and list out products that your business has to offer. Our platform attracts over a million potential buyers who are interested in food and agricultural products every year. Register as a supplier now to start selling more.</p>
            <Link to='/contactus'><button className="border-0">Enroll now</button></Link>
        </div>

    </div>
  )
}

export default Supplier