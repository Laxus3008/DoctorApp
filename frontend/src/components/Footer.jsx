import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt40 text-sm '>
        {/* Left Side */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod suscipit ab pariatur quae atque ducimus et fugit quas, quidem nemo nobis error debitis minima numquam nulla ut est voluptatum aut, molestiae veniam neque similique. Consequatur velit suscipit facilis iste.</p>
        </div>

        {/* Center Side */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Right Side */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 9336520430</li>
                <li>ayushv044@gmail.com</li>
            </ul>
        </div>
      </div>

        {/**copyright */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025. All rights reserved.</p>
        
      </div>
    </div>
  )
}

export default Footer
