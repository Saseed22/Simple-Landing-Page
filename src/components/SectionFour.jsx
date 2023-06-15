import React from 'react'
import { AiFillLeftCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import Icon from '../assets/get-started.png'

const SectionFour = () => {
  return (
    <div className="mt-20 px-5 mx-auto md:container text-right relative text-white flex items-center justify-between">

      <div className='hidden md:block w-2/5 absolute  left-44 '>
        <img src={Icon} alt="icon"  className='w-[550px] h-[350px]' />
      </div>


      <div className='md:w-3/5 mx-auto md:mr-16 bg-green-700 rounded-xl px-5 md:py-5 md:pl-40 pr-10'>
        <h5 className='my-3'>
          <span className='font-bold text-3xl text-yellow-400'>title important </span> title titlt title
        </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aut architecto fuga, modi praesentium corrupti error repudiandae nulla saepe, perferendis optio aspernatur beatae? Amet excepturi quos alias ab dolore repudiandae laudantium, earum architecto beatae ratione vitae dolores dolor. Minus, obcaecati.</p>
        <div className='flex items-center justify-between my-4'>
          <h1 className='flex items-center justify-center gap-2'><AiFillLeftCircle className='text-yellow-400 w-[20px] h-[20px]'/> Using AI</h1>
          <h1 className='flex items-center justify-center gap-2'><AiOutlineLeftCircle className='text-yellow-400 w-[20px] h-[20px]'/> Learning AI</h1>
        </div>
      </div>
    </div>
  )
}

export default SectionFour