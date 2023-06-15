import React from 'react'
import {BsFillArrowUpLeftSquareFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='bg-green-400 text-white w-full mt-20 '>
      <div className='grid md:grid-cols-2 mx-auto md:container py-10 text-center'>
        
        

        <div className='flex items-center justify-evenly'>
          <div>
            <h1>Sorting</h1>
            <h4>Group one</h4>
            <h4>Group two</h4>
            <h4>Group three</h4>
            <h4>Group four</h4>
          </div>
          <div>
            <h1>Sorting</h1>
            <h4>Group one</h4>
            <h4>Group two</h4>
            <h4>Group three</h4>
            <h4>Group four</h4>
          </div>
        </div>

        <div className='w-full '>
          <h1 className='font-bold my-2 md:text-right md:pr-8 text-xl'>Contact Us</h1>

          <form className='flex items-center justify-evenly' >
            <div className='bg-gray-200 md:w-[550px] flex justify-between pr-5 rounded-lg'>
              <button className='border-2 flex items-center border-yellow-400 text-yellow-400 py-2 rounded-lg bg-white gap-2 px-2 my-2 ml-2'> <BsFillArrowUpLeftSquareFill/> Send</button>
              <input
                className='text-right text-gray-700 border-none outline-none bg-gray-200'
                type="text"
                placeholder='Your Email ...' />
            </div>
          </form>
        </div>
      </div>
      <p className=' text-center  md:text-left md:ml-60'>All rights reserved 2023</p>
    </div>
  )
}

export default Contact
